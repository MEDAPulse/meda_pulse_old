Rails.application.routes.draw do
  root to: 'home#index'
  resource :session, only: [:create, :destroy]
end
