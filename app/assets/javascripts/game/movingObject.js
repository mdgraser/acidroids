(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}

	var MovingObject = Asteroids.MovingObject = function (options) {
		this.pos = options.pos;
		this.vel = options.vel;
		this.radius = options.radius;
		this.color = options.color;
		this.game = options.game;
	};

	MovingObject.prototype.isWrappable = true;

	MovingObject.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)
		ctx.fill();
	};

	MovingObject.prototype.move = function () {
		if (this.game.ship && this.game.ship.destroyed) {

		} else {
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
		if (this.isWrappable) {
			this.game.wrap(this.pos);
		} else if (this instanceof Asteroids.Planet) {
			if ((this.pos[0] > this.game.dim_x + 250) ||
					(this.pos[0] < -250) ||
					(this.pos[1] > this.game.dim_y + 250) ||
					(this.pos[1] < -250)) {
				this.game.remove(this);
			}
		} else if (this.game.isOutOfBounds(this.pos)) {
			this.game.remove(this);
		}
	}
	};

	MovingObject.prototype.isCollidedWith = function (otherObj) {
		var distX = this.pos[0] - otherObj.pos[0];
		var distY = this.pos[1] - otherObj.pos[1];
		var combinedRadius = this.radius + otherObj.radius;

		return Math.sqrt( Math.pow(distX, 2) + Math.pow(distY, 2)) < combinedRadius;
	};

	MovingObject.prototype.collideWith = function (otherObj) {
	};

})();
