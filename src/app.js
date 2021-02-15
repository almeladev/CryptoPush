const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// settings
require('dotenv').config();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/db').connect();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// routes
const routes = require('./api/routes/cryptos.js');
app.use(routes);

module.exports = app;