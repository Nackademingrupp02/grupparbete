const Products = require('../models/ProductSchema.js');

async function getAllProducts() {
    try {
        const products = await Products.find();
        return products;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}

export { getAllProducts };