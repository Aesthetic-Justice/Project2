const Sequelize = require(`sequelize`);
require(`dotenv`).config();

if (process.env.JAWSDB_URL) {
    var sequelize = new Sequelize(
        process.env.JAWSDB_URL,
        );
} else {
    var sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: `localhost`,
            dialect: `mysql`,
            port: 3306
        }
    )
};

const result = sequelize;

module.exports = result;