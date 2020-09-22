const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
  res.send('productRoutes')
});

module.exports = router