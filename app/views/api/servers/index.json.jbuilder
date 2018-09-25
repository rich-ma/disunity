json.servers do
  @servers.each do |server|
    json.set! server.id do
      json.partial! 'api/servers/server', server: server
    end
  end
end

json.serverMemberships do
  @servers.includes(:memberships).each do |server|
    server.memberships.each do |membership|
      json.set! membership.id do
        json.extract! membership, :user_id, :server_id, :id
      end
    end
  end
end

json.users do
  @servers.includes(:users).each do |server|
    server.users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username, :username_salt, :nickname, :email
        if user.photo.attached?
          json.photoUrl url_for(user.photo)
        else
          json.photoUrl user.avatar_url
        end
      end
    end
  end
end

json.channels do
  @servers.includes(:channels).each do |server|
    server.channels.each do |channel|
      json.set! channel.id do
        json.extract! channel, :id, :server_id, :name, :channel_type
        if channel.channel_type == 0
          json.type "TEXT"
        else
          json.type "DM"
        end
      end
    end
  end
end

json.messages do
  @servers.includes(:channels => :messages).each do |server|
    server.channels.each do |channel|
      count = 0
      channel.messages.each do |message|
        count += 1
        break if count >= 30
        json.set! message.id do
          json.extract! message, :id, :author_id, :channel_id, :content
          json.time message.created_at.strftime('%l:%M %p')
          json.day message.created_at.strftime('%d')
          json.month message.created_at.strftime('%B')
          json.year message.created_at.strftime('%Y')
          json.updatedAt message.updated_at.strftime('%l:%M %p')
        end
      end
    end
  end
end

online_user_ids = Session.all.collect {|session| session.user_id}

json.onlineUsers do
  json.array! online_user_ids
end
