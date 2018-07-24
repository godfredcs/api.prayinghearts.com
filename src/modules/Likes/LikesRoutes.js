const Router = require('express').Router();

const LikesController = require('./LikesController');

Router.get('/', LikesController.index);
Router.post('/', LikesController.store);
Router.get('/:id', LikesController.show);
Router.put('/:id', LikesController.update);
Router.delete('/:id', LikesController.destroy);

module.exports = Router;
