const mongoose = require('mongoose');

const {HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME} = require('../config/env');

const connectionString = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(connectionString, {useNewUrlParser: true, auth: {authdb: "admin"}});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('we have successfully connected to the database');
});

module.exports = db;
