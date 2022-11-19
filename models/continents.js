const { Model, DataTypes } = require('sequelize');
const sequelize = require(`../config/connection`);

class Continent extends Model{}

Continent.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        children: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
            references: {
                model: `country`,
                key: `id`
            }
        },
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