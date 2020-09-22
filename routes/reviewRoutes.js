const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
  res.send('reviewRoutes')
});

module.exports = router