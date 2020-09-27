const express = require('express');
const auth = require('../middlewares/auth');
const purchaseController = require('../controllers/purchaseController');

const router = express.Router();

router.post('/checkout-session/:productId', auth, purchaseController.getCheckoutSession);

module.exports = router