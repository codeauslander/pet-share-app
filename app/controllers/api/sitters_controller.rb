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
end
