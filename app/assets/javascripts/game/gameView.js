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
		if (!this.game.isOver) {
		setInterval( function() {
			if (!view.game.isOver) {
				view.shoot();
			}
		}, 105);
		setInterval( function() {
			if (!view.game.isOver) {
				view.checkKeys();
				view.game.step();
				view.game.draw(view.ctx);
			}
		}, 20);
		setInterval( function () {
			if (!view.game.isOver) {
				view.game.addPlanet();
			}
		}, 1000 * Math.random());
	}
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
