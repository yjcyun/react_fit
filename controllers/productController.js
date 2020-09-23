const Product = require("../models/productModel")

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}