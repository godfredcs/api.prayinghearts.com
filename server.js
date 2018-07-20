const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

const {PORT} = require('./src/config/env');
const {setHeaders, _404} = require('./src/middlewares');
const sockets = require('./src/sockets');
const db = require('./src/db');

app.use(setHeaders);

app.get('/', (req, res) => {
    console.log('ip address of client is: ', req.socket.localAddress.substr(7));
    res.send('hello world');
});

_404(app); // Handle 404 and other errors.

sockets(io); // Handles sockets.

server.listen(PORT, () => console.log('we are live on port: ', PORT));
