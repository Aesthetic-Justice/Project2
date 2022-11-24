const Continent = require(`./continents`);
const Country = require(`./countries`);
const City = require(`./cities`);
const Attraction = require(`./attractions`);

Continent.hasMany(Country,{
    foreignKey: `continent_id`,
    onDelete: `CASCADE`,
});

Country.hasMany(City, {
    foreignKey: `country_id`,
    onDelete: `CASCADE`,
});

City.hasMany(Attraction, {
    foreignKey: `city_id`,
    onDelete:`Cascade`,
})

Attraction.belongsTo(City, {
    foreignKey: `city_id`,
})

City.belongsTo(Country, {
    foreignKey: `country_id`,
})

Country.belongsTo(Continent,{
    foreignKey: `continent_id`,
});

module.exports = { Continent, Country, City, Attraction};