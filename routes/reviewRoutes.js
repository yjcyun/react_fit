const express = require('express');
const auth = require('../middlewares/auth');
const reviewController = require('../controllers/reviewController');
const { check } = require('express-validator');

const router = express.Router({ mergeParams: true });

// @route  api/v1/products/productId/reviews
router
  .route('/')
  .get(reviewController.getReviews)
  .post(
    [auth, [
      check('review', 'Review is required').not().isEmpty()
    ]],
    reviewController.setProductUserIds,
    reviewController.createReview
  );

router
  .route('/:reviewId')
  .patch(
    [auth, [
      check('review', 'Review is required').not().isEmpty()
    ]],
    reviewController.updateReview
  )
  .delete(auth, reviewController.deleteReview);

// @route  api/v1/products/productId/reviews/like/:id
router
  .route('/like/:id')
  .patch(auth, reviewController.updateLikes)

// @route  api/v1/products/productId/reviews/unlike/:id
router
  .route('/unlike/:id')
  .patch(auth, reviewController.updateUnlikes)


module.exports = router