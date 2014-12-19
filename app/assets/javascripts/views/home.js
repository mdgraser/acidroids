Asteroids.Views.HomeView = Backbone.View.extend({

  template: JST['home'],
  id: 'main',

  render: function () {
    var content = this.template({});
    this.$el.html(content);

    return this;
  }
});
