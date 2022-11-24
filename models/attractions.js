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
        description:{
            type: Datatypes.STRING,
            defaultValue: `sample_text`,
        },
        city_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: `city`,
                key: `id`
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `attraction`
    }
);

module.exports = Attraction;