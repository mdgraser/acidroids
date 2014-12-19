class HighScore < ActiveRecord::Base

  validates :score, :name, presence: true
end
