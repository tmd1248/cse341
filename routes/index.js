const routes = require('express').Router();
routes.get('/', (req, res, next) => {
    res.json("Hi it's me")
});
module.exports = routes;