const mongoose = require('mongoose');

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_URL, { 
            useUnifiedTopology: true,
            useNewUrlParser: true,
            user: process.env.DB_USER || '',
            pass: process.env.DB_PASS || ''
        }).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {
    connect
};