Asteroids.Collections.HighScores = Backbone.Collection.extend({

  model: Asteroids.Models.HighScore,
  url: 'high_scores',

  comparator: function(highScore) {
    return (highScore.get('score') * -1);
  },

  getOrFetch: function (id) {
    var high_scores = this;
    var high_score = this.get(id);

    if (high_score) {
      high_score.fetch();
    } else {
      high_score = new Asteroids.Models.Track({ id: id });
      high_score.fetch({
        success: function () {
          high_scores.add(high_score)
        }
      });
    }

    return high_score;
  }

});

Asteroids.highScores = new Asteroids.Collections.HighScores;
