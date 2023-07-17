const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const BookSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  houseno: {
    type: String,
    required: true,
  },
  appartment: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  items: {
    type: [ItemsSchema],
    required: true,
  },
});

//export schema to use in model file

module.exports = BookSchema;
