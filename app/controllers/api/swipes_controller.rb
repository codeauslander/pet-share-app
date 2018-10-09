class Api::SwipesController < ApplicationController
  def create
    @swipe = Swipe.new(
                        petowner_id: params[:petowner_id],
                        sitter_id: current_user.id,
                        swipe_by_petowner_value: 'yes',
                        swipe_by_sitter_value: params[:swipe_by_sitter_value]
                      )
    @swipe.save
    if params[:swipe_by_sitter_value] == 'yes'
      @petowner = Petowner.find(params[:petowner_id])
      render 'api/petowners/show.json.jbuilder'
    else
      @petowners = Petowner.all
      render 'api/petowners/index.json.jbuilder'
      # render json: {erro}
    end
  end

  def update
    swipe_id = params[:id]
    @swipe = Swipe.find(swipe_id)

    @swipe.petowner_id = params[:petowner_id] || @swipe.petowner_id
    @swipe.sitter_id = params[:sitter_id] || @swipe.sitter_id
    @swipe.swipe_by_petowner_value = params[:swipe_by_petowner_value] || @swipe.swipe_by_petowner_value
    @swipe.swipe_by_sitter_value = params[:swipe_by_sitter_value] || @swipe.swipe_by_sitter_value
  
    @swipe.save

  end
end
