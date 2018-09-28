class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(
                        petowner_id: params[:petowner_id],
                        sitter_id: params[:sitter_id],
                        rating_by_petowner_value: params[:rating_by_petowner_value],
                        rating_by_sitter_value: params[:rating_by_sitter_value]
                        )
    @rating.save
  end

  def update
    rating_id = params[:id]
    @rating = Rating.find(rating_id)

    @rating.petowner_id = params[:petowner_id] || @rating.petowner_id
    @rating.sitter_id = params[:sitter_id] || @rating.sitter_id
    @rating.rating_by_petowner_value = params[:rating_by_petowner_value] || @rating.rating_by_petowner_value
    @rating.rating_by_sitter_value = params[:rating_by_sitter_value] || @rating.rating_by_sitter_value
 
    @rating.save

  end
end
