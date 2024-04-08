const Products = require("../models/ProductSchema.js");
const jsonData = require("../../Testdata_Sprint_1.json");
const { productErrorHandler } = require("../util/apiHelpers.js");

async function getAllProducts(req, res) {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    productErrorHandler(error, res);
  }
}

async function addProduct(req, res) {
  try {
    const _product = req.body;
    const product = await Products.create(_product);
    if (!product) {
      throw new Error("Cast to ObjectId");
    }
    res.status(201).json(product);
  } catch (error) {
    productErrorHandler(error, res);
  }
}

async function removeProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Products.findByIdAndDelete(id);
    if (!product) {
      throw new Error("Cast to ObjectId");
    }
    res.status(204).json();
  } catch (error) {
    productErrorHandler(error, res);
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const _product = req.body;
  try {
    const updatedProduct = await Products.findByIdAndUpdate(id, _product, {
      new: true,
      runValidators: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    productErrorHandler(error, res);
  }
}
async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    if (!product) {
      throw new Error("Cast to ObjectId");
    }
    res.json(product);
  } catch (error) {
    productErrorHandler();
  }
}

//Funktion för att lägga till data direkt från JSON.
async function addProductFromJSONData() {
  try {
    for (const productData of jsonData) {
      const { name, price, category } = productData;

      const product = new Products({
        name: name,
        price: price,
        category: category,
      });

      await product.save();
    }
    console.log("Products added successfully");
  } catch (error) {
    productErrorHandler();
  }
}

async function viewProductByCategory(req, res) {
  const { category } = req.params;
  try {
    const products = await Products.find({ category: category });

    res.json(products);
  } catch (error) {
    productErrorHandler();
  }
}


async function searchProducts(req, res) {
  try {

    res.json("testing");

  } catch (error) {
    //tillfällig lösning
    console.error(error);
  }


}
module.exports = {
  getAllProducts,
  addProduct,
  addProductFromJSONData,
  removeProduct,
  viewProductByCategory,
  getProduct,
  updateProduct,
  searchProducts
};
