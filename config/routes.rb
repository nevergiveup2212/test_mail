Rails.application.routes.draw do
	get 'index/welcome'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # 
   post '/create', to: 'users#create' 
end
