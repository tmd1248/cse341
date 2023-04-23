const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/', controller.responseFunction);
module.exports = routes;