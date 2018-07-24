const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

const db = require('./src/db');
const {PORT} = require('./src/config/env');
const sockets = require('./src/sockets');
const {setHeaders, handleErrors, checkAuthorization} = require('./src/middlewares');
const {UsersRoutes, PostsRoutes} = require('./src/modules');

app.use(setHeaders);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'src', 'public')));

app.get('/', (req, res) => {
    console.log('ip address of client is: ', req.socket.localAddress.substr(7));
    res.send('hello world');
});

app.use('/users', UsersRoutes);
app.use('/posts', checkAuthorization, PostsRoutes);

handleErrors(app); // Handle 404 and other errors.

sockets(io); // Handles sockets.

server.listen(PORT, () => console.log('we are live on port: ', PORT));
