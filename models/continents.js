const { Model, DataTypes } = require('sequelize');
const sequelize = require(`../config/connection`);

class Continent extends Model { }

Continent.init(
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
        filename: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `continent`
    }
);

module.exports = Continent;