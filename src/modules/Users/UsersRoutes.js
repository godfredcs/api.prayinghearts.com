const Router = require('express').Router();
const UsersController = require('./UsersController');

Router.get('/', UsersController.index);
Router.post('/register', UsersController.register);
Router.post('/login', UsersController.login);
Router.post('/reset_password', UsersController.passwordReset);
Router.get('/:id', UsersController.show);
Router.put('/:id', UsersController.update);
Router.delete('/:id', UsersController.destroy);

module.exports = Router;