var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log(`Server has found port ${port} and everything is working`)
});
