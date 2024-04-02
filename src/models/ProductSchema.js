

import  mongoose from "mongoose"


const ProductsSchema = new mongoose.Schema({
    name: { type: String, },
    price: { type: Number },
    category: { type: String },
})
const Product = mongoose.model("Product", ProductsSchema)
export default  Product