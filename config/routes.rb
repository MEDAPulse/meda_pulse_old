Rails.application.routes.draw do
  root to: 'home#index'
  get 'dashboard', to: 'home#dashboard', as: 'dashboard'
  resource :session, only: [:create, :destroy]
  resources :clients, only: [:create, :destroy, :show, :update]
  resources :goals, only: [:create, :destroy, :update]
  resources :action_plans, only: [:create, :destroy, :update]
  resources :steps, only: [:create, :destroy, :update]
  resources :text_messages, only: [:create]
  resources :users, only: [:create]
  post 'text_messages/incoming', to: 'text_messages#incoming', as: 'incoming_text'
  get 'clients/:client_id/steps', to: 'clients#steps'
  put 'steps/mark_complete/:step_id', to: 'steps#mark_complete'
  put 'steps/mark_not_complete/:step_id', to: 'steps#mark_not_complete'
end