const express = require('express');

const router = express.Router();

// @route   POST api/users/signup
// @desc    REGISTER USER
// @access  Public
router.post('/signup', (req, res) => {
  res.send('Created')
});

// @route   POST api/users/login
// @desc    REGISTER USER
// @access  Public
router.post('/login', (req, res) => {
  res.send('Logged In')
});

module.exports = router