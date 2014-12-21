Asteroids.Views.GameOverView = Backbone.View.extend({

  template: JST['game_over'],
  id: 'main',

  render: function () {
    var content = this.template({});
    this.$el.html(content);

    return this;
  },

  events: {
    'submit form' : 'submit',
    'click li.game' : 'game',
    'click li.controls' : 'controls',
    'click li.scores' : 'scores'
  },

  submit: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.set(params);
    var form = this;
    Asteroids.highScores.create(this.model, {
      success: function (model) {
        Backbone.history.navigate('#scores', {trigger: true})
      },
      error: function (model) {
        debugger
      }
    });
  },

  game: function () {
    Backbone.history.navigate('#game', {trigger: true});
  },

  controls: function () {
    Backbone.history.navigate('#controls', {trigger: true});
  },

  scores: function () {
    Backbone.history.navigate('#scores', {trigger: true});
  }

});
