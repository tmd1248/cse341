var express = require('express');
var app = express();

app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('Server has found port 3000 and everything is working')
});
