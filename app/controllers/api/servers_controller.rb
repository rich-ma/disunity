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
    # server where server.id in current_user.servers
    @servers = Server.all
    render :index
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
    @server = Server.find(params[:id])
    @server.destroy
  end

  private
  def server_params
    params.require(:server).permit(:name, :icon_url, :topic)
  end
end