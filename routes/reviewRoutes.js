const express = require('express');
const auth = require('../middlewares/auth');
const reviewController = require('../controllers/reviewController');
const { check } = require('express-validator');

const router = express.Router({ mergeParams: true });

// @route  api/v1/products/productId/reviews
router.get('/', reviewController.getReviews);

router.post('/',
  [auth, [
    check('review', 'Review is required').not().isEmpty()
  ]],
  reviewController.setProductUserIds,
  reviewController.createReview
);

router.patch('/:reviewId',
  [auth, [
    check('review', 'Review is required').not().isEmpty()
  ]],
  reviewController.updateReview
);

router.delete('/:reviewId', auth, reviewController.deleteReview )

module.exports = router