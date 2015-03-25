Asteroids.Views.GameView = Backbone.View.extend({

  template: JST['game'],
  id: 'main',

  events: {
    'click #replay' : 'render'
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.launchGame();
    return this;
  },

  launchGame: function () {
    setTimeout(function () {
      var canvasEl = document.getElementsByTagName("canvas")[0];
      canvasEl.width = Asteroids.Game.DIM_X;
      canvasEl.height = Asteroids.Game.DIM_Y;
      var ctx = canvasEl.getContext("2d");
      var game = new Asteroids.Game();
      new Asteroids.GameView(game, ctx).start();
    }, 100)

    setTimeout(function () {
      moveJeff()
      var size = 120;
  		var $display = $("#overlay-text");
      $display.hide();
  		$display.html("HiyAAAAAAAA!!");
  		var printText = function () {
  			if (size > 0) {
  				setTimeout(function () {
  					$display.css({'font-size': size});
  					$display.show();
  					size -= 5;
  					printText();
  				}, 20);
  			} else {
  				$display.hide();
  			}
  		}

  		printText();
    }, 46000);

    function makeNewPosition () {
      var h = $(window).height() - 50;
      var w = $(window).width() - 50;

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

      return [nh,nw];
    };

    function moveJeff () {
      var newp = makeNewPosition();
      $('.gallery-piece').animate({ top: newp[0], left: newp[1] }, function() {
        moveJeff();
      });
    };
  },
});
