var express = require('express');
var consign = require('consign');
var expressValidator = require('express-validator');
var bodyParser = require ('body-parser');
var expressSession = require('express-session');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended : true }));

app.use(expressValidator());

app.use(expressSession({
    secret : 'rtqyunbvfdtyukmnbgf',
    resave : false,
    saveUninitialized: false
}));

consign()
    .include('./app/controllers')
    .then('./app/routes')
    .then('./app/models')
    .into(app)


module.exports = app;