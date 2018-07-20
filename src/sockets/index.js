module.exports = io => {
    io.on('connection', socket => {
        console.log('A user has connected');
        socket.emit('news', {
            greeting: 'Saludos amigos'
        });

        socket.on('new_message', message => {
            console.log('this is the message: ', message);
            io.emit('new_message', message);
        });

        socket.on('get_socket_id', () => {
            console.log('socket is trying to get id');
        });

        socket.on('received-post', data => {
            console.log('The data from received-post is ', data);
        });

        socket.on('ping server', data => {
            io.emit('ping server', data);
        })

        socket.on('disconnect', () => {
            io.emit('User disconnected');
        });
    });
};