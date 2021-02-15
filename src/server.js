const app = require('./app');
const port = process.env.PORT || 3000;

exports.start = () => {
    app.listen(port, () => {
        console.log('Servidor en puerto: ', port);
    });
};

