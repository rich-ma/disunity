json.extract! server, :id, :name, :admin_id, :icon_url

if server.photo.attached?
  json.photoUrl url_for(server.photo)
else
  json.photoUrl server.icon_url
end