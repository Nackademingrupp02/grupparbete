const mongoose = require("mongoose");
// schema of products
const ProductsSchema = new mongoose.Schema({
    name: { type: String, minlength: 2, maxLength: 75, required: true },
    price: { type: Number, float:true,min: 1, max: 100000, required: true },
    category: { type: String, required: true, minLength: 2, maxLength: 75 },
});
const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
