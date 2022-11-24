const sequelize = require('../config/connection');
const { Continent, Country, City, Attraction } = require(`../models`);

const Continent_seed = require(`./continentSeed.json`);
const Country_seed = require(`./countrySeed.json`);
const City_seed = require(`./citySeed.json`);
const Attraction_seed = require(`./attractionSeed.json`);

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