class Api::PetownersController < ApplicationController

  def index
    @petowners = Petowner.all

    render 'index.json.jbuilder'

  end

  def show
    petowner_id = params[:id]
    @petowner = Petowner.find(petowner_id)

    render 'show.json.jbuilder'
  end

  def create
    @petowner = Petowner.new(
                          pet_name: params[:pet_name],
                          pet_bio: params[:pet_bio],
                          zipcode: params[:zipcode],
                          start_date: params[:start_date],
                          end_date: params[:end_date],
                          petowner_image: params[:petowner_image]
                          )

    if @petowner.save
      render 'show.json.jbuilder'
    else
      render json: {errors: @petowner.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    petowner_id = params[:id]
    @petowner = Petowner.find(petowner_id)

    @petowner.pet_name = params[:pet_name] || @petowner.pet_name
    @petowner.pet_bio = params[:pet_bio] || @petowner.pet_bio
    @petowner.zipcode = params[:zipcode] || @petowner.zipcode
    @petowner.start_date = params[:start_date] || @petowner.start_date
    @petowner.end_date = params[:end_date] || @petowner.end_date
    @petowner.petowner_image = params[:petowner_image] || @petowner.petowner_image


    if @petowner.save
      render 'show.json.jbuilder'

    else
      render json: {errors: @petowner.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
      petowner_id = params[:id]
      @petowner = Petowner.find(petowner_id)
      @petowner.destroy
      render json: {message: "Petowner successfully removed"}
  end
end
