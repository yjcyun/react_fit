const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// @route   GET api/v1/products
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);

module.exports = router