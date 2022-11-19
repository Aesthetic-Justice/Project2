const { Model, DataTypes } = require('sequelize');
const sequelize = require(`../config/connection`);

class Country extends Model{}

Country.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        parent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        children: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
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