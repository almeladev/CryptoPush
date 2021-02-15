const conn = require('../../config/db').connection();
const Schema = require('mongoose').Schema;

let Cryptos = Schema({
    id: Number,
    name: String,
    status: Boolean
});

module.exports = conn.model('cryptos', Cryptos);