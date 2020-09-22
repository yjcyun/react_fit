const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth')

const router = express.Router();

// @route   GET api/users
// @desc    GET LOGGED IN USER
// @access  PRIVATE
router.get('/', auth, userController.getUser);


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
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], userController.login);

module.exports = router