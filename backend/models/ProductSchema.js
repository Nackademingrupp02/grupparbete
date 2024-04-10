const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxLength: 75,
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
    match: /^(?:0\.[0-9]{1,2}|[1-9]{1}[0-9]*(\.[0-9]{1,2})?|0)$/,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
