var faker = require('faker')
//faker.locale = "de"

function fakerHotels () {
var fakerData = {};
var key = 'hotels'
fakerData[key] = []
for(var hotelCount = 10; hotelCount>0 ; hotelCount--)
{
    var hotel = {
        id: faker.datatype.uuid(),
        name: `Hotel ${faker.address.cityName()}`,
        description: faker.lorem.paragraph(),
        distance_to_venue: faker.datatype.number(40),
        rating: faker.datatype.number({min:1, max:5}),
        price_category: faker.random.arrayElement(['low', 'medium', 'high'])
    }


hotel['amenities'] = [];
var amenitiesRandomCount = faker.datatype.number({'min': 1,'max': 7});
var amenityOptions = ['free_parking', 'free_wifi', 'gym', 'pets', 'pool', 'restaurant', 'spa']
for(var amenities = 0 ; amenities<amenitiesRandomCount ; amenities++)
{
    hotel['amenities'].push(amenityOptions[amenities])
}


hotel['images'] = [];
var imagesRandomCount = faker.datatype.number({'min': 4,'max': 10});
var imagesOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10']
for(var images = faker.datatype.number({'min': 0,'max': 3}) ; images<imagesRandomCount ; images++)
{
    hotel['images'].push(imagesOptions[images]+'.jpg')
}

hotel['rooms'] = [];
var roomsTypeRandomCount = faker.datatype.number({'min': 3,'max': 6});
var roomsOptions = ['King', 'Twin', 'Studio', 'Executive Suite', 'Mini Suite', 'Cabana']
for(var rooms = faker.datatype.number({'min': 0,'max': 2}) ; rooms<roomsTypeRandomCount ; rooms++)
{
    var room = {
        id: faker.datatype.uuid(),
        name: roomsOptions[rooms],
        description: faker.lorem.paragraph(),
        max_occupancy: faker.datatype.number({'min': 1,'max': 4}),
        rating: faker.datatype.number({'min': 1,'max': 5}),
        price_in_usd: faker.datatype.number({'min': 1,'max': 300}),
        available: faker.datatype.boolean(),
    }
    hotel['rooms'].push(room)
}

fakerData[key].push(hotel)
}
return {"hotels": fakerData }
}

module.exports = fakerHotels