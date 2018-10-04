Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"

  get '/users' => 'users#index'
  post "/users" => "users#create"
 
  namespace :api do
    get '/petowners' => 'petowners#index'
    get '/petowners/:id' => 'petowners#show'
    post '/petowners' => 'petowners#create'
    patch '/petowners/:id' => 'petowners#update'
    delete '/petowners/:id' => 'petowners#destroy'
  end

  namespace :client do
    get '/petowners' => 'petowners#index'
    get '/petowners/new' => 'petowners#new'
    post '/petowners' => 'petowners#create'
    get '/petowners/:id' => 'petowners#show'
    patch '/petowners/:id' => 'petowners#update'
    delete '/petowners/:id' => 'petowners#destroy'
  end

  namespace :api do
    get '/sitters' => 'sitters#index'
    get '/sitters/:id' => 'sitters#show'
    post '/sitters' => 'sitters#create'
    patch '/sitters/:id' => 'sitters#update'
    delete '/sitters/:id' => 'sitters#destroy'
  end

  namespace :api do
    post '/swipes' => 'swipes#create'
    patch '/swipes/:id' => 'swipes#update'
  end

  namespace :api do
    post '/ratings' => 'ratings#create'
    patch '/ratings/:id' => 'ratings#update'
  end

end
