const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name']
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price']
  },
  category: {
    type: String,
    enum: {
      values: ['women', 'men', 'bags', 'shoes'],
      message: 'Category must be one of these four: women, men, bags, or shoes'
    }
  },
  summary: {
    type: String
  },
  description: {
    type: String
  },
  stock: [
    {
      size: String,
      qty: Number
    }
  ],
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be greater than 1'],
    max: [5, 'Rating must be less than 5'],
    set: val => Math.round(val * 10) / 10
  },
  imageCover: {
    type: String
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;