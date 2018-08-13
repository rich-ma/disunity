class Api::ServersMembershipsController < ApplicationController
  def create
    @server_membership = ServersMembership.new
    if params[:name] #user is joining a server
      @server = Server.find_by(name: params[:name])
      if @server
        @server_membership.server_id = @server.id
      else
        @server_membership.server_id = nil
      end
    else #user creating server
      @server_membership = ServersMembership.new(membership_params)
    end
    
    @server_membership.user_id = current_user.id
    if @server_membership.save
      render :show
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @server_membership = ServersMembership.find_by(id: params[:id])
    @server_membership.destroy
  end

  private
  def membership_params
    params.require(:servers_membership).permit(:server_id, :name)
  end
end
