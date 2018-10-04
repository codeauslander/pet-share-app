class UsersController < ApplicationController
  # before_action 
  def create
    puts '1'
    @user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      # type: params[:type]
    )
    
    if @user.save
      puts '2'
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
        puts '3'
        @sitter = Sitter.new(
                            bio: params[:bio],
                            zipcode: params[:zipcode],
                            sitter_image: params[:sitter_image],
                            user_id: @user.id
                            )
        if @sitter.save
          puts '4'
          render 'show.json.jbuilder'
        else
          render json: {errors: @sitter.errors.full_messages}, status: :unprocessable_entity
        end
      end
    else
      puts 'last'
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
