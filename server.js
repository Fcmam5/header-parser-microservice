var express = require('express'),
    routes = require('./app/routes/index.js');
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
routes(app);

app.listen(3000, function () {
  console.log('I am listening on port 3000!')
})
