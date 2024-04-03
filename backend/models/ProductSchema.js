const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: { type: String, minlength: 2, maxLength: 20, required: true },
  price: { type: Number, min: 1, max: 100000, required: true },
  category: { type: String, required: true, minLength: 2, maxLength: 20 },
});
const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
