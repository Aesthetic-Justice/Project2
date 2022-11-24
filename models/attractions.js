const { Model, DataTypes} = require(`sequelize`);
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating:{
            type: DataTypes.INTEGER,
            defaultValue: 3,
            validate:{
                max: 5,
                min: 1
            }
        },
        description:{
            type: DataTypes.STRING,
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