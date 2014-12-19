(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

	var Bullet = Asteroids.Bullet = function (options) {
		this.ship = options.ship;
		this.game = options.game;
		options.pos = [this.ship.pos[0], this.ship.pos[1]];
		options.vel = Bullet.VELOCITY(this.ship.dir);
		options.radius = 4;
		options.color = Bullet.COLOR;

		Asteroids.MovingObject.call(this, options);
	};

	Bullet.COLOR = "#FFFFFF"
	Bullet.VELOCITY = function (dir) {
		return [Math.cos(dir) * 25, Math.sin(dir) * 25];
	};

	Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

	Bullet.prototype.collideWith = function (otherObj) {
		if (otherObj instanceof Asteroids.Asteroid) {
			this.game.remove(otherObj);
			this.game.score += 1;
		}
	};

	Bullet.prototype.isWrappable = false;

})();
