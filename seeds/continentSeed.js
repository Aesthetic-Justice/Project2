const { Continent } = require ('../models');

const continentData = [
    {
        name: 'North America'
    }, 

    {
        name: 'Europe'
    },
];

const seedContinents = () => Continent.bulkCreate(continentData);

module.exports = seedContinents;