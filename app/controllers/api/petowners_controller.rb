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

end
