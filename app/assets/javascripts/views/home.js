Asteroids.Views.HomeView = Backbone.View.extend({

  template: JST['home'],
  id: 'main',

  events: {
    'click li.game' : 'game',
    'click li.controls' : 'controls',
    'click li.scores' : 'scores',
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);

    return this;
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
