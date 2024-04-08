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
        const _product = req.body;
        const product = await Products.create(_product);
        res.status(201).json(product)
    } catch (error) {
        console.log(error);
    }
}

async function getProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await Products.findById(id)
        if (!product) {
            throw new Error("Cast to ObjectId");
        }
        res.json(product);
    } catch(error) {
        productErrorHandler();
    }
}

async function removeOneProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
            throw new Error("Cast to ObjectId");
        }
        res.status(204).json(); 
    } catch (error) {
        console.log(error);
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


async function viewProductByCategory(req, res) {
    const { category } = req.params;
    try {
        const products = await Products.find({ category: category });
        // if (!product) {
        //     throw new Error("No products found in")
        // }
        res.json(products)
    } catch(error) {
        productErrorHandler();
    }
}

module.exports = { getAllProducts, addProduct, addProductFromJSONData, removeOneProduct, viewProductByCategory, getProduct };