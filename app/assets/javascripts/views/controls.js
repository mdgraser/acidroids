Asteroids.Views.ControlsView = Backbone.View.extend({

  template: JST['controls'],
  id: 'main',

  render: function () {
    var content = this.template({});
    this.$el.html(content);

    return this;
  }
});
