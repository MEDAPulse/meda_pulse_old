Rails.application.routes.draw do
  root to: 'home#index'
  get 'dashboard', to: 'home#dashboard', as: 'dashboard'
  resource :session, only: [:create, :destroy]

end
