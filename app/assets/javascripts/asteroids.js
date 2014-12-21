window.Asteroids = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new Asteroids.Routers.Router({
      $rootEl: $('body')
    });

    Backbone.history.start();
  }
};

$(document).ready(function () {

  Asteroids.initialize();




  setInterval(colorize, 125)

  function colorize() {
    var divs = [];
    divs.push($('.header'));

    $('p').each(function(index) {
      divs.push($(this))
    });

    $('td').each(function(index) {
      divs.push($(this))
    });

    $('h4').each(function(index) {
      divs.push($(this))
    });

    $('li').each(function(index) {
      divs.push($(this))
    });

    for (var j = 0; j < divs.length; j++) {
      var chars = divs[j].text().split('');
      var element = $('<span></span>');
      for(var i = 0; i < chars.length; i++) {
        var span = $('<span>' + chars[i] + '</span>').css("color", randomColor());
        element.append(span);

      }
      divs[j].html(element);
    };
  };
});
