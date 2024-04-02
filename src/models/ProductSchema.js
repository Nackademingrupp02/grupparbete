

import  mongoose from "mongoose"


const ProductsSchema = new mongoose.Schema({
    name: { type: String, minlength:2, maxLength:20 , required:true},
    price: { type: Number, min: 1, max:100000, required:true},
    category: { type: String, required:true, minLength: 2, maxLength: 20},
})
const Product = mongoose.model("Product", ProductsSchema)
export default  Product



