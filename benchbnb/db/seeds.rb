# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

b1 = Bench.create(description: 'This is a bench!', lat: 37.765349, lng: -122.452884)
b2 = Bench.create(description: 'This is a bench!', lat: 37.749843, lng: -122.447957)
b3 = Bench.create(description: 'This is a bench!', lat: 37.784179, lng: -122.505083)
b4 = Bench.create(description: 'This is a bench!', lat: 37.797461, lng: -122.432328)
b5 = Bench.create(description: 'This is a bench!', lat: 37.757363, lng: -122.391175)