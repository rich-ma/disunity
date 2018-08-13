Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :servers, only: [:create, :update, :index, :destroy]
    resources :servers_memberships, only: [:create, :destroy]
  end

  root "static_pages#root"
end