const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  category: {
    type: [String],
  },
  freeShipping: {
    type: Boolean,
    required: true,
  },
  onSale: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});

//export schema to use in model file

module.exports = ProductSchema;
