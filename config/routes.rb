Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"

  namespace :api do
    get '/petowners' => 'petowners#index'
    get '/petowners/:id' => 'petowners#show'
    post '/petowners' => 'petowners#create'
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
    post '/sitters' => 'sitters#create'
    patch '/sitters/:id' => 'sitters#update'
  end

end
