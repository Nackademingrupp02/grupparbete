const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxLength: 50,
    required: true,
    match: /[a-zA-Z0-9\s]+[a-zA-Z0-9]+/,
    trim: true,
  },
  price: {
    type: Number,
    float: true,
    min: 1,
    max: 100000,
    required: true,
    match: /^(\d+(?:,\d{1,2})?).*/,
  },
  packageSize: {
    type: String,
    minlength: 1,
    maxLength: 10,
    required: true,
    match: /[a-zA-Z0-9\s]+[a-zA-Z0-9]+/,
  },
  comparePrice: {
    type: String,
    minlength: 1,
    maxLength: 15,
    required: true,
    match: /[a-zA-Z0-9\s]+[a-zA-Z0-9]+/,
  },
  brand: {
    type: String,
    minlength: 1,
    maxLength: 30,
    required: true,
    match: /[a-zA-Z0-9\s]+[a-zA-Z0-9]+/,
  },
  description: {
    type: String,
    minlength: 10,
    maxLength: 500,
    match: /[a-zA-Z0-9\s]+[a-zA-Z0-9]+/,
  },
  ingredients: {
    type: String,
    match: /[a-zA-Z\s]+[a-zA-Z]+/,
    maxLength: 500,
  },
  picture: {
    type: String,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
