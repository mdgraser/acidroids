Asteroids.Views.GameView = Backbone.View.extend({

  template: JST['game'],
  id: 'main',

  events: {
    'click #replay' : 'render'
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.launchGame();
    return this;
  },

  launchGame: function () {
    setTimeout(function () {
      var canvasEl = document.getElementsByTagName("canvas")[0];
      canvasEl.width = Asteroids.Game.DIM_X;
      canvasEl.height = Asteroids.Game.DIM_Y;
      var ctx = canvasEl.getContext("2d");
      var game = new Asteroids.Game();
      new Asteroids.GameView(game, ctx).start();
    }, 100)
  },
});
