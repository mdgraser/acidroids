Rails.application.routes.draw do

  root to: 'home#root'
  resources :high_scores, only: [:create, :index], defaults: { format: :json }
end
