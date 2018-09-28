class Api::SittersController < ApplicationController

  def index
    @sitters = Sitter.all

    render 'index.json.jbuilder'

  end

  def show
    sitter_id = params[:id]
    @sitter = Sitter.find(sitter_id)
    render 'show.json.jbuilder'

  end


  def create
    @sitter = Sitter.new(
                          bio: params[:bio],
                          zipcode: params[:zipcode],
                          user_id: params[:user_id],
                          sitter_image: params[:sitter_image]
                          )

    if @sitter.save
      render 'show.json.jbuilder'
    else
      render json: {errors: @sitter.errors.full_messages}, status: :unprocessable_entity
    end
  end


  def update
    sitter_id = params[:id]
    @sitter = Sitter.find(sitter_id)

    @sitter.bio = params[:bio] || @sitter.bio
    @sitter.zipcode = params[:zipcode] || @sitter.zipcode
    @sitter.sitter_image = params[:sitter_image] || @sitter.sitter_image


    if @sitter.save
      render 'show.json.jbuilder'

    else
      render json: {errors: @sitter.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
      sitter_id = params[:id]
      @sitter = Sitter.find(sitter_id)
      @sitter.destroy
      render json: {message: "Sitter successfully removed"}
  end
end
