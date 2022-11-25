const sequelize = require('../config/connection');
const { Continent, Country, City, Attraction } = require(`../models`);

const Continent_seed = require(`./continentSeed`);
const Country_seed = require(`./countrySeed`);
const City_seed = require(`./citySeed`);
const Attraction_seed = require(`./attractionsSeed`);

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