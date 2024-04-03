const Products = require('../models/ProductSchema.js');
const jsonData = require('../../Testdata_Sprint_1.json');

async function getAllProducts() {
    try {
        const products = await Products.find();
        return products;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}

async function addProduct(req, res) {
    try {
        const { name, price, category } = req.body;

        const product = new Products({
            name,
            price,
            category
        });
        
        await product.save();

        res.status(201).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}


//Funktion för att lägga till data direkt från JSON. 
async function addProductFromJSONData() {
    try {
        for (const productData of jsonData) {
            const { name, price, category } = productData;

            const product = new Products({
                name:name,
                price:price,
                category:category
            });

            await product.save();
        }
        console.log('Products added successfully');
    } catch(error) {
        console.error('Error adding product:', error)
    }
}

module.exports = { getAllProducts, addProduct, addProductFromJSONData };