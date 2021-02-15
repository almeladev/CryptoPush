
const Crypto = require("../models/Crypto");
const fetch = require("node-fetch");

/**
 * Muestra la lista de mis Cryptos favoritas :)
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

/**
 * Obtiene la información relevante de una (1) criptomoneda a partir de su ID
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getInfoCrypto = (req, res, next) => {
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=' + req.params.cryptoId + '&CMC_PRO_API_KEY=' + process.env.API_KEY)
        .then(r => r.json())
        .then(json =>  res.json(json.data));
};

/**
 * Obtiene el precio en USD de una criptomoneda a partir de su ID
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 */
const getPriceCrypto = (req, res, next) => {
    fetch('https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=' + req.params.cryptoId + '&amount=1&CMC_PRO_API_KEY=' + process.env.API_KEY)
        .then(r => r.json())
        .then(json =>  res.json(json.data));
};

module.exports = {
    index,
    getInfoCrypto,
    getPriceCrypto
};