class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel_#{params[:channel_id]}"
  end

  def unsubscribed
    stop_all_streams
  end

  def create(opts)
    Message.create(
      author_id: opts.fetch("authorId"),
      channel_id: opts.fetch("channelId"),
      content: opts.fetch("content"),
    )
  end

  def update(opts)
    Message.find(opts.fetch("id")).update_attributes(
      author_id: opts.fetch("authorId"),
      channel_id: opts.fetch("channelId"),
      content: opts.fetch("content"),
    )
  end

  def destroy(opts)
    Message.find(opts.fetch("id")).destroy
  end
end
