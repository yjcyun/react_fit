const { validationResult } = require("express-validator");
const APIFeatures = require("../middlewares/apiFeatures");
const Review = require("../models/reviewModel");

// SET PRODUCT AND USER 
exports.setProductUserIds = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
}

// FETCH ALL REVIEWS
exports.getReviews = async (req, res) => {
  try {
    let filter = {};
    if (req.params.productId) filter = { product: req.params.productId };

    const features = new APIFeatures(Review.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()

    const reviews = await features.query;
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
    const data = await Review.create(req.body);
    res.status(201).json(data);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}

// UPDATE REVIEW
exports.updateReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const review = await Review.findByIdAndUpdate(req.params.reviewId, req.body, {
      new: true,
      runValidators: true
    });
    // 1) CHECK IF REVIEW EXISTS
    if (!review) {
      return res.status(404).json({ msg: 'No document found with that ID' });
    }
    res.status(200).json(review);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}

// DELETE REVIEW
exports.deleteReview = async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.reviewId);
  try {
    // 1) CHECK IF REVIEW EXISTS
    if (!review) {
      return res.status(404).json({ msg: 'No document found with that ID' });
    }
    // 2) CHECK IF LOGGED IN USER IS THE ONE WHO CREATED THE REVIEW
    if (review.user._id.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    // 3) REMOVE REVIEW
    // await review.remove();
    res.status(204).json({ msg: 'Review removed' });

  } catch (err) {
    console.log(err.kind);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Review not found' });
    }
    res.status(500).send('Server Error');
  }
}

// UPDATE LIKES
exports.updateLikes = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    // 1) CHECK IF THE POST HAS ALREADY BEEN LIKED BY THIS USER
    if (review.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
      return res.status(400).json({ msg: 'Review already liked' });
    }

    review.likes.unshift({ user: req.user.id });
    await review.save();
    res.json(review.likes);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}

exports.updateUnlikes = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    // 1) CHECK IF THE POST HAS BEEN LIKED YET BY THIS USER
    if (review.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
      return res.status(400).json({ msg: 'Review has not yet been liked' });
    }

    // 2) GET REMOVE INDEX
    const removeIndex = review.likes.map(like => like.user.toString()).indexOf(req.user.id);
    review.likes.splice(removeIndex, 1);

    await review.save();
    res.json(review.likes);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}