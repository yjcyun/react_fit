const { validationResult } = require("express-validator");
const Review = require("../models/reviewModel");

exports.setProductUserIds = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id;
  console.log(req.user);
  next();
}

// FETCH ALL REVIEWS
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}

// CREATE REVIEW
exports.createReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const doc = await Review.create(req.body);
    res.status(201).json(doc);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}