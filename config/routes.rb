Rails.application.routes.draw do
  devise_for :users

  get 'top', to: 'normals#top'
  root 'normals#dice'
  get 'sample1', to: 'normals#sample1'
  get 'sample2', to: 'normals#sample2'
  get 'budget', to: 'normals#budget'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
