const Router = require('express').Router();
const UsersController = require('./UsersController');
const {checkAuthorization} = require('../../middlewares');

Router.get('/', checkAuthorization, UsersController.index);
Router.post('/register', UsersController.register);
Router.post('/login', UsersController.login);
Router.post('/reset_password', checkAuthorization, UsersController.passwordReset);
Router.get('/:id', checkAuthorization, UsersController.show);
Router.put('/:id', checkAuthorization, UsersController.update);
Router.delete('/:id', checkAuthorization, UsersController.destroy);

module.exports = Router;

