Asteroids.Views.ControlsView = Backbone.View.extend({

  template: JST['controls'],
  id: 'main',

  render: function () {
    var content = this.template({});
    this.$el.html(content);

    return this;
  },

  events: {
    'click li.game' : 'game',
    'click li.home' : 'home',
    'click li.scores' : 'scores',
  },

  game: function () {
    Backbone.history.navigate('#game', {trigger: true});
  },

  home: function () {
    Backbone.history.navigate('#', {trigger: true});
  },

  scores: function () {
    Backbone.history.navigate('#scores', {trigger: true});
  }
});
