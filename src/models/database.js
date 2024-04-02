import Product from "./ProductSchema.js"

import { mongoose } from "mongoose"
database()

async function database() {

    try {

        
        mongoose.connect("mongodb://localhost:27017/g2")


        const product = new Product({ name: "Kaka", price: 55, category: "food" })

        console.log(product);
        product.save()
    }
    catch (error) { console.error(error); }
}
