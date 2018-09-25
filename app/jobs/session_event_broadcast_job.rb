class SessionEventBroadcastJob < ApplicationJob

  def perform(session, type)
    ActionCable.server.broadcast(
        "session_channel",
        userId: session.user_id,
        type: type
      )
  end
  
end
