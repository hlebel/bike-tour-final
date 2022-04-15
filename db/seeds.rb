# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Rider.destroy_all
#Slogan.destroy_all


riders = Rider.create ([
    {
        first_name: "Dustin", 
        last_name: "Green",
        city_of_origin: "Hickory Hills",
        state_of_origin: "IL",
        location: "40.00, -105.35"

    },
    {
        first_name: "Jason", 
        last_name: "Finn",
        city_of_origin: "Huntington Beach",
        state_of_origin: "CA",
        location: "39.95, -105.24"

    },
    {
        first_name: "Howard", 
        last_name: "Thompson",
        city_of_origin: "Hale",
        state_of_origin: "MO",
        location: "40.06, -105.26"

    },
    {
        first_name: "Maggie", 
        last_name: "Lantz",
        city_of_origin: "Dublin",
        state_of_origin: "OH",
        location: "40.03, -105.23"

    },
    {
        first_name: "Lawrence", 
        last_name: "Duran",
        city_of_origin: "Fort Myers",
        state_of_origin: "FL",
        location: "40.04, -105.23"

    },
    {
        first_name: "Irene", 
        last_name: "Molina",
        city_of_origin: "Tucson",
        state_of_origin: "AZ",
        location: "39.96, -105.22"

    },
    {
        first_name: "Nancy", 
        last_name: "Garner",
        city_of_origin: "Baltimore",
        state_of_origin: "MD",
        location: "39.98, -105.21"

    },
    {
        first_name: "Tara", 
        last_name: "Taylor",
        city_of_origin: "Minneapolis",
        state_of_origin: "MN",
        location: "40.00, -105.25"

    },
    {
        first_name: "Alejandro", 
        last_name: "Smith",
        city_of_origin: "Scarborough",
        state_of_origin: "ME",
        location: "40.02, -105.26"

    },
    {
        first_name: "Tricia", 
        last_name: "Renshaw",
        city_of_origin: "Mystic",
        state_of_origin: "CT",
        location: "40.02, -105.30"

    },
    {
        first_name: "Travis", 
        last_name: "Cook",
        city_of_origin: "Twin Lakes",
        state_of_origin: "WI",
        location: "40.01, -105.20"

    },
    {
        first_name: "Joan", 
        last_name: "Brooks",
        city_of_origin: "Norfolk",
        state_of_origin: "VA",
        location: "39.98, -105.24"

    },
    {
        first_name: "Joseph", 
        last_name: "Rodgers",
        city_of_origin: "Wayne",
        state_of_origin: "NJ",
        location: "39.99, -105.25"

    },
    {
        first_name: "Matthew", 
        last_name: "Gregson",
        city_of_origin: "Brashear",
        state_of_origin: "MO",
        location: "40.01, -105.29"

    },
    {
        first_name: "Katie", 
        last_name: "Dunlap",
        city_of_origin: "Marion",
        state_of_origin: "VA",
        location: "39.97, -105.27"

    },
    {
        first_name: "Leo", 
        last_name: "Howard",
        city_of_origin: "Dallas",
        state_of_origin: "TX",
        location: "39.97, -105.33"

    },
    {
        first_name: "Maria", 
        last_name: "Baisden",
        city_of_origin: "Raleigh",
        state_of_origin: "NC",
        location: "40.00, -105.29"

    },
    {
        first_name: "Sandy", 
        last_name: "Townsend",
        city_of_origin: "Newport",
        state_of_origin: "PA",
        location: "40.05, -105.30"

    },
    {
        first_name: "Melinda", 
        last_name: "Stephenson",
        city_of_origin: "Kahului",
        state_of_origin: "HI",
        location: "39.99, -105.31"

    },
    {
        first_name: "Jason", 
        last_name: "Nichols",
        city_of_origin: "Alexandria",
        state_of_origin: "VA",
        location: "40.01, -105.32"

    }
])

# p "Created #{Riders.count} entries."