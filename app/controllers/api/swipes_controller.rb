class Api::SwipesController < ApplicationController
  def create
    @swipe = Swipe.new(
                        petowner_id: params[:petowner_id],
                        sitter_id: params[:sitter_id],
                        rating_by_petowner_value: params[:rating_by_petowner_value],
                        rating_by_sitter_value: params[:rating_by_sitter_value]
                        )
    @swipe.save
  end

  def update
    swipe_id = params[:id]
    @swipe = Swipe.find(swipe_id)

    @swipe.petowner_id = params[:petowner_id] || @swipe.petowner_id
    @swipe.sitter_id = params[:sitter_id] || @swipe.sitter_id
    @swipe.rating_by_petowner_value = params[:rating_by_petowner_value] || @swipe.rating_by_petowner_value
    @swipe.rating_by_sitter_value = params[:rating_by_sitter_value] || @swipe.rating_by_sitter_value
  
    @swipe.save

  end
end
