const sequelize = require('../config/connection');
const { Continent, Country, City, Attraction } = require(`../models`);

const Continent_seed = require(`./continentSeedData.json`);
const Country_seed = require(`./countrySeedData.json`);
const City_seed = require(`./citySeedData.json`);
const Attraction_seed = require(`./attractionSeedData.json`);

function countAttractions(Attraction_seed,city_id){
    let count = 0;
    for (const attractions of Attraction_seed){
        if(attractions.city_id==city_id){
            count++;
        }
    }
    return count;
}

const seedDatabase = async() => {
    await sequelize.sync({force:true});

    const continents = await Continent.bulkCreate(Continent_seed, {
        individualHooks: true,
        returning: true,
    });

    for (const country of Country_seed){
        const newCountry = await Country.create({
            ...country,
        });
    }
    
    for (var city of City_seed){
        const newCity = await City.create({
            ...city,
            numAttraction: countAttractions(Attraction_seed,city_id),
        });
    }
    
    for (const attractions of Attraction_seed){
        const newAttraction = await Attraction.create({
            ...attractions,
        })
    }


    process.exit(0);
}

seedDatabase();