const { Model, DataTypes} = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Scoreboard extends Model {};

Scoreboard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: `user`,
                key: `id`
            },
        },
        attraction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: `attraction`,
                key: `id`
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                max: 5,
                min: 1
            }
        }
    },
    {

    }
)