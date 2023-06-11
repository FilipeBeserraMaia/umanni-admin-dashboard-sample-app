Rails.application.routes.draw do


  root to: redirect('/api/v1') 
   
  namespace :api do 
    namespace :v1 do 
      mount_devise_token_auth_for 'User', at: 'auth'
      root to: "home#index" 
      resources :sessions, only: [:create,:destroy]
      resources :users, only: [:index,:create,:destroy,:edit,:update] do 
          get :roles, on: :collection 
      end

    end
   end
end
