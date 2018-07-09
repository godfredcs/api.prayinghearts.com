const http = require('http');
const express = require('express');
const app = express();

const server = http.Server(app);

const { PORT } = require('./src/config/env');

server.listen(PORT, () => console.log('we are live on port: ', PORT));