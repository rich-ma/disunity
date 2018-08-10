json.extract! user, :id, :username, :username_salt, :nickname, :email

if user.photo.attached?
  json.photoUrl url_for(user.photo)
else
  json.photoUrl user.avatar_url
end