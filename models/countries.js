const { Model, DataTypes } = require('sequelize');
const sequelize = require(`../config/connection`);

class Country extends Model{}

Country.init(
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
        continent_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: `continent`,
                key: `id`
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `country`
    }
);

module.exports = Country;