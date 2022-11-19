const { Model, DataTypes } = require('sequelize');
const sequelize = require(`../config/connection`);

class City extends Model{}

City.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        children: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
            references: {
                model: `attraction`,
                key: `id`
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `city`
    }
)

module.exports = City;