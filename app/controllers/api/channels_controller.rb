class Api::ChannelsController < ApplicationController
 def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end
  
  def update
    @channel = Channel.find(params[:id])
    if @channel.update_attributes(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
  end

  private
  def channel_params
    params.require(:channel).permit(:server_id, :name, :channel_type)
  end
end