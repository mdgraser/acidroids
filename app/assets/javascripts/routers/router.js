Asteroids.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '' : 'home',
    'game' : 'game',
    'controls' : 'controls',
    'scores' : 'scores',
    'gameover' : 'gameOver'
  },

  home: function () {
    var view = new Asteroids.Views.HomeView({});
    return this._swapView(view);
  },

  game: function () {
    var view = new Asteroids.Views.GameView({});

    return this._swapView(view);
  },

  controls: function () {
    var view = new Asteroids.Views.ControlsView({});

    return this._swapView(view);
  },

  scores: function () {
    Asteroids.highScores.fetch();
    var view = new Asteroids.Views.ScoresView({ collection: Asteroids.highScores });

    return this._swapView(view);
  },

  gameOver: function () {
    if (typeof $SCORE === 'undefined') { $SCORE = 0 }
    var score = new Asteroids.Models.HighScore();
    var view = new Asteroids.Views.GameOverView({ model: score });

    return this._swapView(view);
  },


  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
