Asteroids.Views.GameOverView = Backbone.View.extend({

  template: JST['game_over'],
  id: 'main',

  render: function () {
    var content = this.template({});
    this.$el.html(content);

    return this;
  },

  events: {
    'submit form' : 'submit'
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
  }

});
