const config = require('config');
const stripe = require('stripe')(config.get('stripeSecretKey'));
const Product = require("../models/productModel");
const Purchase = require('../models/purchaseModel');

exports.getCheckoutSession = async (req, res) => {
  try {
    console.log(req.params.productId);
    const product = await Product.findById(req.params.productId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${req.protocol}://${req.get('host')}/`,
      cancel_url: `${req.protocol}://${req.get('host')}/`,
      customer_email: req.user.email,
      line_items: [
        {
          name: `${product.name}`,
          description: product.summary,
          // FIXME: point the url to correct address
          images: [``],
          amount: product.price * 100,
          currency: 'cad',
          quantity: 1
        }
      ]
    })
    res.status(200).json(session);

  } catch (err) {
    console.log(err)
  }
}

exports.createBookingCheckout = async (req, res, next) => {
  const { product, user, price } = req.query;
  if (!product && !user && !price) return next();
  await Purchase.create({ product, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
}