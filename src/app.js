const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Configuración
require('dotenv').config();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Conectar a MongoDB y arrancar el server
const db = require('./config/database');
const server = require('./server');
db.connect().then(() => {
    console.log('¡Base de datos conectada!');
    server.start();
}).catch((err) => {
    console.error('Error al conectar la Base de datos: ', err.stack);
    process.exit(1);
});

// TODO: UNIFICAR
// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// Rutas
const routes = require('./api/routes/CryptoRoutes.js');
app.use(routes);

module.exports = app;