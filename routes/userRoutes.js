const express = require('express');
const userController = require('../controllers/userController');
const { check } = require('express-validator');


const router = express.Router();

// @route   POST api/users/signup
// @desc    REGISTER USER
// @access  Public
router.post('/signup', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], userController.signup);

// @route   POST api/users/login
// @desc    REGISTER USER
// @access  Public
router.post('/login', (req, res) => {
  res.send('Logged In')
});

module.exports = router