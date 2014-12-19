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




  setInterval(colorize, 75)

  function colorize() {
    var divs = [];
    divs.push($('.header'));

    $('a').each(function(index) {
      divs.push($(this))
    });

    $('td').each(function(index) {
      divs.push($(this))
    });

    $('h4').each(function(index) {
      divs.push($(this))
    });

    $('p').each(function(index) {
      divs.push($(this))
    });

    for (var j = 0; j < divs.length; j++) {
      var chars = divs[j].text().split('');
      divs[j].html('');
      for(var i = 0; i < chars.length; i++) {
        var span = $('<span>' + chars[i] + '</span>').css("color", randomColor());
        divs[j].append(span);
      }
    };
  };
});
