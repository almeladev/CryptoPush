
const Crypto = require("../models/Crypto");

/**
 * Muestra la lista de Cryptos
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const index = (req, res, next) => {
    Crypto.find({}, (err, cryptos) => {
        if (err) throw err;
        res.render('index', {
            title: 'Crypto Push',
            cryptos: cryptos
        });
    });
};

module.exports = {
    index
};