const { Model, DataTypes } = require('sequelize');
const bcrypt = require(`bcrypt`);

class User extends Model{
    checkPassword(Password){
        return bcrypt.compareSync(Password, this.password);
    }
}

User.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [16],
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `user`,
    }
);

module.exports = User;