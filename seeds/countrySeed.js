const { Country }= require('../models');

const countryData =[
    {
        name: 'Canada', 
        continent_id: 1
    }, 
    {
        name: 'U.S.A', 
        continent_id: 1
    }, 
    {
        name: 'France', 
        continent_id: 2
    },
];

const seedCountries=()=> Country.bulkCreate(countryData);
module.exports = seedCountries;