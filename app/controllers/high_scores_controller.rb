class HighScoresController < ApplicationController

  def index
    @high_scores = HighScore.all
    render :index
  end

  def create
    @high_score = HighScore.new(high_score_params)

    if @high_score.save
      render json: @high_score
    else
      render json: @high_score.errors.full_messages, status: 422
    end
  end

  private

  def high_score_params
    params.require(:high_score).permit(:name, :score)
  end
end
