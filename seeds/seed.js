const sequelize = require('../config/connection');
const { Continent, Country, City, Attraction } = require(`../models`);

const Continent_seed = require(`./continentSeed.js`);
const Country_seed = require(`./countrySeed.js`);
const City_seed = require(`./citySeed.js`);
const Attraction_seed = require(`./attractionsSeed.js`);

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const continents = await Continent.bulkCreate(Continent_seed, {
        individualHooks: true,
        returning: true,
    });

    const newCountry = await Country.bulkCreate(Country_seed, {
        individualHooks: true,
        returning: true,
    });

    const newCity = await City.bulkCreate(City_seed,{
        individualHooks: true,
        returning: true,
    });


    const newAttraction = await Attraction.bulkCreate(Attraction_seed,{
        individualHooks: true,
        returning: true,
    })

    process.exit(0);
}

seedDatabase();