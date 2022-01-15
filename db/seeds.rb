# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all

rich = User.create(username: "richmaaa", email:'rich@rich.io', password: '123456')
steven = User.create(username: "smartestSteven", email:'steven@steven.io', password: '123456')
david = User.create(username: "DW3B17", email:'david@david.io', password: '123456')
rob = User.create(username: "RobFarb2010", email:'rob@rob.io', password: '123456')
demo = User.create(username: 'Demo_User', email: "demo@appacademy.io", password: 'starwars')

s1 = Server.create(admin_id: steven.id, name: 'TV!', icon_url: 'https://image.flaticon.com/icons/svg/188/188918.svg')
s2 = Server.create(admin_id: david.id, name: 'App Academy', icon_url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2005/s300/logo-emblem-red-1000-1-.jpg')

ServersMembership.create(user_id: 1, server_id: 1)
ServersMembership.create(user_id: 1, server_id: 2)
ServersMembership.create(user_id: 2, server_id: 1)
ServersMembership.create(user_id: 3, server_id: 2)
ServersMembership.create(user_id: 4, server_id: 1)
ServersMembership.create(user_id: 4, server_id: 2)
ServersMembership.create(user_id: 5, server_id: 1)
ServersMembership.create(user_id: 5, server_id: 2)

a = Channel.create(server_id: 1, name: 'Choose your starter')
b = Channel.create(server_id: 1, name: 'Cute Pics!')
c = Channel.create(server_id: 1, name: 'Dunder Mifflin')
d = Channel.create(server_id: 2, name: 'general')
e = Channel.create(server_id: 2, name: 'SF June 2019')
f = Channel.create(server_id: 2, name: 'David\'s Circle')

ash = User.create(username: "TheVeryBest", email:'ash@ash.io', password: '123456', avatar_url: 'https://vignette.wikia.nocookie.net/party-ninja/images/1/15/Ash_season_1.jpg/revision/latest?cb=20131107175054')
oak = User.create(username: "ProfessorOak", email:'oak@oak.io', password: '123456', avatar_url: 'https://pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_400x400.png')
mom = User.create(username: "Mom", email:'mom@mom.io', password: '123456', avatar_url: 'https://vignette.wikia.nocookie.net/pokemon/images/8/83/Delia_9.jpg/revision/latest?cb=20110817194555')
pikachu = User.create(username: "Pikachu", email:'pika@pika.io', password: '123456', avatar_url:'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png')

ServersMembership.create(user_id: ash.id, server_id: s1.id)
ServersMembership.create(user_id: oak.id, server_id: s1.id)
ServersMembership.create(user_id: oak.id, server_id: s2.id)
ServersMembership.create(user_id: mom.id, server_id: s1.id)
ServersMembership.create(user_id: pikachu.id, server_id: s1.id)

Users = {
    'Ash'=> ash,
    'Professor Oak'=> oak,
    'Delia'=> mom,
    'Pikachu'=> pikachu,
  }

# pokemon seed
File.readlines('app/assets/text/pokemons1e1.txt').each_with_index do |line, i|
  line = line.split(': ')
  author_name = line[0]
  content = line[1]
  
  new_message = Message.create(author_id: Users[author_name].id, channel_id: a.id, content: content)
  new_message.created_at = i.minutes.from_now
  new_message.save
end


# office seed
fake_jim = User.create(username: "RealestJim", email:'jim@jim.io', password:'123456', avatar_url:'http://www.angryasianman.com/images/angry/randallpark_theoffice01.jpg')

dwight = User.create(username: "DwightKSchrute", email:'dwight@dwight.io', password: '123456', avatar_url: 'https://i1.sndcdn.com/artworks-000001104797-rgzcts-t500x500.jpg')

pam = User.create(username: "Pam", email:'pam@pam.io', password: '123456', avatar_url: 'https://screenrant.com/wp-content/uploads/2018/08/Pam-Halpert-in-The-Office.jpg')

machine = User.create(username: "voicemail", email:'robot@robot.io', password: '123456', avatar_url:'https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/101/10173/10173396.jpg')

ServersMembership.create(user_id: fake_jim.id, server_id: s1.id)
ServersMembership.create(user_id: dwight.id, server_id: s1.id)
ServersMembership.create(user_id: machine.id, server_id: s1.id)
ServersMembership.create(user_id: pam.id, server_id: s1.id)

Users2 = {
    'Fake Jim'=> fake_jim,
    'Dwight'=> dwight,
    'Pam'=> pam,
    'Voicemail'=>machine,
  }

  File.readlines('app/assets/text/Offices9e3.txt').each_with_index do |line, i|
  line = line.split(': ')
  author_name = line[0]
  content = line[1]
  new_message = Message.create(author_id: Users2[author_name].id, channel_id: c.id, content: content)
  new_message.created_at = i.minutes.from_now
  new_message.save
end