json.array! @high_scores do |high_score|
  json.extract! high_score, :name, :score
end
