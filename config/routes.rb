Rails.application.routes.draw do
  root to: 'home#index'
  get 'dashboard', to: 'home#dashboard', as: 'dashboard'
  resource :session, only: [:create, :destroy]
  resources :clients, only: [:create, :destroy, :show, :update]
  resources :goals, only: [:create, :destroy, :update]
  resources :action_plans, only: [:create, :destroy, :update]
  resources :steps, only: [:create, :destroy, :update]
end