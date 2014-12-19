Asteroids.Views.ScoresView = Backbone.View.extend({

  template: JST['scores'],
  id: 'main',

  initialize: function () {
    this.listenTo(this.collection, 'add remove sync', this.render);
  },

  render: function () {
    var content = this.template({ highScores: this.collection });
    this.$el.html(content);

    return this;
  },
});
