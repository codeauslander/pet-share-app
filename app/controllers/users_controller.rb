class UsersController < ApplicationController
  # before_action 
  def create
    p params[:name]
    @user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    
    if @user.save
      if params[:type] == 'petowner'
        @petowner = Petowner.new(
                            pet_name: params[:pet_name],
                            pet_bio: params[:pet_bio],
                            zipcode: params[:zipcode],
                            start_date: params[:start_date],
                            end_date: params[:end_date],
                            petowner_image: params[:petowner_image],
                            user_id: @user.id
                            )
        if @petowner.save
          render 'show.json.jbuilder'
        else
          render json: {errors: @petowner.errors.full_messages}, status: :unprocessable_entity
        end

      elsif params[:type] == 'sitter'
        @sitter = Sitter.new(
                            bio: params[:bio],
                            zipcode: params[:zipcode],
                            sitter_image: params[:sitter_image],
                            user_id: @user.id
                            )
        if @sitter.save
          render 'show.json.jbuilder'
        else
          render json: {errors: @sitter.errors.full_messages}, status: :unprocessable_entity
        end
      end
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def index
    if current_user
      @user = current_user
      @petowner = current_user.petowner
      @sitter = current_user.sitter

      render 'show.json.jbuilder'
    else
      render json: {user: 'login or singup please'}
    end
  end

end
