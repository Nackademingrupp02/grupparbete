// CFC stand for category Filter Controller

// change in sprint 2
// get the model from pruduct schema
const Products = require('../models/ProductSchema.js');


async function getAllCategory() {
    try{
        const allCategory = await Products.find()



    }catch(err){

        console.error(err);
    }
    
}

module.exports = allCategory