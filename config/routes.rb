Rails.application.routes.draw do
  get '/gallery', to: 'pages#gallery'
  get '/map', to: 'pages#map'
  get '/riders', to: 'pages#riders'
  get '/slogans', to: 'pages#slogans'
  post '/api/slogans', to: 'pages#create'
  get '/api/riders', to: 'pages#ridersApi'
  get '/api/slogans', to: 'pages#slogansApi'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"
end
