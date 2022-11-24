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
        // rating:{
        //     type: Datatypes.INTEGER,
        //     defaultValue: 0,
        //     validate:{
        //         max: 5,
        //         min: 0
        //     }
        // },
        filename: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.STRING,
            defaultValue: `sample_text`,
        },
        link: {
            type: DataTypes.STRING, 
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