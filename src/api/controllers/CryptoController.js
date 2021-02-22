
const Crypto = require("../models/Crypto");
const fetch = require("node-fetch");

/**
 * Mostrar la lista de mis criptomonedas favoritas :)
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const index = (req, res, next) => {
    Crypto.find({}, (err, cryptos) => {
        if (err) throw err;
        console.log(cryptos);
        res.render('index', {
            title: 'Crypto Push',
            cryptos: cryptos
        });
    });
};

/**
 * Insertar una nueva criptomoneda.
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const store = (req, res, next) => {
    const crypto = new Crypto({
        idCMC: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        description: 'Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."',
        category: 'coin'
    });
    crypto.save().then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
};

/**
 * Actualizar una criptomoneda.
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const update = (req, res, next) => {
    //
};

/**
 * Borrar una criptomoneda.
 * 
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const destroy = (req, res, next) => {
    //
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
    store,
    update,
    destroy
};