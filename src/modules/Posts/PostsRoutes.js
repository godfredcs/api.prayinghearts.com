const Router = require('express').Router();

const PostsController = require('./PostsController');

Router.get('/', PostsController.index);
Router.post('/', PostsController.store);
Router.get('/:id', PostsController.show);
Router.get('/user/:id', PostsController.showAll);
Router.put('/:id', PostsController.update);
Router.delete('/:id', PostsController.destroy);

module.exports = Router;
