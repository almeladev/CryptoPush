const mongoose = require('mongoose');
const server = require('../server');

const connect = () => {
    if (!mongoose.connection.readyState) {
        mongoose.connect(process.env.DB_URL, { 
            useUnifiedTopology: true,
            useNewUrlParser: true,
            user: process.env.DB_USER || '',
            pass: process.env.DB_PASS || ''
        }).then(() => {
            console.log('DB conectada!');
            server.start();
        }).catch((err) => {
            console.error('Error al conectar la BD: ', err.stack);
            process.exit(1);
        });
    }
};
const connection = () => mongoose;

module.exports = {
    connect,
    connection
};