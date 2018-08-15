class Api::ServersController < ApplicationController 
  def create
    @server = Server.new(server_params)
    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end


  def index
    @servers = current_user.servers
    render :index
  end 

  def show    
    @server = Server.find(params[:id])
    render :show
  end 

  def update
    @server = Server.find(params[:id])
    if @server.update_attributes(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    # @id = params[:id]
    @server = Server.find(params[:id])
    @server.destroy
    # render :delete
  end

  private
  def server_params
    params.require(:server).permit(:name, :icon_url, :admin_id, :photo, :id)
  end
end