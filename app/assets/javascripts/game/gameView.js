(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

	var GameView = Asteroids.GameView = function (game, ctx) {
		this.game = game;
		this.ctx = ctx;
	};

	GameView.prototype.start = function () {
		var view = this;
		var bulletIntervalId = setInterval( function() {
			if (!view.game.isOver) {
				view.shoot();
			}
		}, 105);
		var planetIntervalId = setInterval( function () {
			if (!view.game.isOver) {
				view.game.addPlanet();
			}
		}, 2000 * Math.random());
		var ufoIntervalId = setInterval( function () {
			if (!view.game.isOver && view.game.level > 3) {
				view.game.addUfo();
			}
		}, 20000 * Math.random());

		var gameIntervalId = setInterval( function() {
			if (view.game.isOver) {
				clearInterval(ufoIntervalId);
				clearInterval(bulletIntervalId);
				clearInterval(planetIntervalId);
				clearInterval(gameIntervalId);
			} else {
				view.checkKeys();
				view.game.step();
				view.game.draw(view.ctx);
			}
		}, 20);
	};

	GameView.prototype.shoot = function () {
		var ship = this.game.ship;
		if (key.isPressed(32) && !ship.invincible) {
			ship.fireBullet();
		}
	}

	GameView.prototype.checkKeys= function () {
		var ship = this.game.ship;
		if (ship.destroyed) {
		} else {
	    if (key.isPressed('a') || key.isPressed(37)) {
				ship.rotate(-Math.PI / 32);
	    }
	    if (key.isPressed('d') || key.isPressed(39)) {
				ship.rotate(Math.PI / 32);
	    }
	    if (key.isPressed('w') || key.isPressed(38)) {
				ship.power([Math.cos(ship.dir), Math.sin(ship.dir)]);
			}
	    if (key.isPressed('s') || key.isPressed(40)) {
				ship.power([-Math.cos(ship.dir), -Math.sin(ship.dir)]);
			}
			if (!key.isPressed('w') && !key.isPressed('s')) {
					ship.decelerate();
			}
		}
	};

})();
