require('dotenv-safe').config();

module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
};