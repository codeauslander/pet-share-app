class UserTokenController < Knock::AuthTokenController
  protect_from_forgery with: :null_session

  def create
    puts params
    email = request.params["auth"] && request.params["auth"]["email"]    
    password = request.params["auth"] && request.params["auth"]["password"]
    user = User.find_by(email: email)
    if user && user.authenticate(password)
      body = {
        jwt: auth_token.token,
        user: { id: user.id, name: user.name, email: user.email }
      }
      render json: body, status: :created
    else
      render json: {}
    end
  end
end