const { Model, Datatypes} = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Attraction extends Model{}

Attraction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location_type: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        rating:{
            type: Datatypes.INTEGER,
            defaultValue: 0,
            validate:{
                max: 5,
                min: 0
            }
        },
        city_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: `city`,
                key: `id`
            }
        },

    }
);

module.exports = Attraction;