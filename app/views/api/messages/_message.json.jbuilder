json.extract! message, :author_id, :channel_id, :content
json.time message.created_at.strftime('%l:%M %p')
json.day message.created_at.strftime('%d')
json.month message.created_at.strftime('%B')
json.year message.created_at.strftime('%Y')
json.updatedAt message.updated_at.strftime('%l:%M %p')
