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

s1 = Server.create(admin_id: steven.id, name: 'DoUKNowdaWae', icon_url: 'https://png.icons8.com/color/1600/ugandan-knuckles.png')
s2 = Server.create(admin_id: david.id, name: 'App Academy', icon_url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2005/s300/logo-emblem-red-1000-1-.jpg')

ServersMembership.create(user_id: 1, server_id: 1)
ServersMembership.create(user_id: 1, server_id: 2)
ServersMembership.create(user_id: 2, server_id: 1)
ServersMembership.create(user_id: 3, server_id: 2)
ServersMembership.create(user_id: 4, server_id: 1)
ServersMembership.create(user_id: 4, server_id: 2)
ServersMembership.create(user_id: 5, server_id: 1)
ServersMembership.create(user_id: 5, server_id: 2)

Channel.create(server_id: 1, name: 'general')
Channel.create(server_id: 1, name: 'gaming')
Channel.create(server_id: 2, name: 'general')
Channel.create(server_id: 2, name: 'SF June 2018')
Channel.create(server_id: 2, name: 'David\'s Circle')

s1.photo.attach(io: File.open('app/assets/images/knuckles.png'), filename: 'knuckles.png')
s2.photo.attach(io: File.open('app/assets/images/doge-icon.png'), filename: 'doge-icon.png')