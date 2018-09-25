class SessionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "session_channel"
  end

  def unsubscribed
    stop_all_streams
  end

  def create(options)
    Session.create(
      user_id: options.fetch("userId")
    )
  end

  def destroy(options)
    Session.find_by(user_id: options.fetch("userId")).destroy
  end
end
