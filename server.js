var express = require('express');
var app = express();

const routes = require('express').Router();
routes.get('/', (req, res, next) => {
    res.json("Hi it's me")
});

app.listen(3000, () => {
    console.log('Server has found port 3000 and everything is working')
});
