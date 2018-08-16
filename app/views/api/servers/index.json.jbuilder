
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
        json.partial! '/api/users/user', user: user
      end
    end
  end
end

json.channels do 
  @servers.includes(:channels).each do |server|
    server.channels.each do |channel|
      json.set! channel.id do
        json.partial! '/api/channels/channel', channel: channel
      end
    end  
  end
end
