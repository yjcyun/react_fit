const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// @route   GET api/v1/products
// @desc    Get all products
// @access  Public
router.get('/', productController.getProducts);

module.exports = router