Rails.application.routes.draw do


   namespace :api do 
    namespace :v1 do 
      root to: "home#index" 
    end
   end
end
