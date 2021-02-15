const { Router } = require('express');
const router = Router();
const CryptoController = require('../controllers/CryptoController');

router.get("/", CryptoController.index);

module.exports = router;