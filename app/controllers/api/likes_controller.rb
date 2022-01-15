class Api::LikesController < ApplicationController
  def create
    @like = Like.create(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :message_id)
  end
end