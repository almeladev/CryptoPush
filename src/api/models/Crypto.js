const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CryptoSchema = Schema({
    idCMC: Number,
    name: String,
    symbol: String,
    logo: String,
    description: String,
    category: String
});

const Crypto = mongoose.model('Crypto', CryptoSchema);
module.exports = Crypto;