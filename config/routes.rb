Rails.application.routes.draw do

  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :servers, only: [:show, :create, :update, :index, :destroy]
    resources :servers_memberships, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy] do
      resources :messages, only: [:create]
    end
    resources :messages, only: [:update, :destroy]
  end
  mount ActionCable.server => '/cable'
  
  root "static_pages#root"
end