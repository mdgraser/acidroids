(function() {
	if(typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

	var ConsoleView = Asteroids.ConsoleView = function (options) {
		this.game = options.game;
		this.level = options.game.level;
		this.counter = 0;
	}

	ConsoleView.prototype.draw = function (ctx) {
		ctx.fillStyle = '#FFFFFF';
		ctx.font = "small-caps bold 20px andale mono"
		ctx.fillText("Score: " + this.game.score.toString(), 20, 30)
		if (!this.game.ship.destroyed) {
			for (i = 0; i < this.game.lives; i++) {
				var point = [Asteroids.Game.DIM_X - 20 - i * 30, 25];
				ctx.save();
				ctx.translate(point[0], point[1]);
				ctx.translate(-point[0], -point[1]);
				ctx.drawImage(this.game.ship.img, point[0] - 10, point[1] - 10, 20, 20);
				ctx.restore();
			}
		}
	};
})();
