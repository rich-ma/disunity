# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rich = User.create(username: "richmaaa", email:'rich@rich.io', password: '123456')
steven = User.create(username: "smartestSteven", email:'steven@steven.io', password: '123456')
david = User.create(username: "DW3B17", email:'david@david.io', password: '123456')
rob = User.create(username: "RobFarb2010", email:'rob@rob.io', password: '123456')
demo = User.create(username: 'DWeb17', email: "dweb", password: 'starwars')

Server.create(admin_id: 2, name: 'DoUKNowdaWae', icon_url: 'https://png.icons8.com/color/1600/ugandan-knuckles.png')
Server.create(admin_id: 3, name: 'App Academy', icon_url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2005/s300/logo-emblem-red-1000-1-.jpg')