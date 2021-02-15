const { Router } = require('express');
const router = Router();
const CryptoController = require('../controllers/CryptoController');

router.get("/", CryptoController.index);
router.get("/info/:cryptoId", CryptoController.getInfoCrypto);
router.get("/price/:cryptoId", CryptoController.getPriceCrypto);

module.exports = router;