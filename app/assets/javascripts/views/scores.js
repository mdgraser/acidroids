Asteroids.Views.ScoresView = Backbone.View.extend({

  template: JST['scores'],
  id: 'main',

  initialize: function () {
    this.listenTo(this.collection, 'add remove sync', this.render);
  },

  events: {
    'click li.game' : 'game',
    'click li.controls' : 'controls',
    'click li.home' : 'home'
  },

  game: function () {
    Backbone.history.navigate('#game', {trigger: true});
  },

  controls: function () {
    Backbone.history.navigate('#controls', {trigger: true});
  },

  home: function () {
    Backbone.history.navigate('#', {trigger: true});
  },

  render: function () {
    var content = this.template({ highScores: this.collection });
    this.$el.html(content);

    return this;
  },
});
