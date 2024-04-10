const Products = require("../models/ProductSchema.js");
const Categorys = require("../models/CategorySchema.js");
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
    productErrorHandler(error, res);
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
    // Find the category object based on its name
    const categoryObject = await Categorys.findOne({ name: category });
    if (!categoryObject) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Find products belonging to the specified category
    const products = await Products.find({ category: categoryObject._id });
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this category" });
    }

    // Respond with the products
    res.json(products);
  } catch (error) {
    productErrorHandler(error, res);
  }
}


async function searchProducts(req, res) {
  try {
    const {search} = req.body
    console.log("Search product: ",search);
    const searchProductFilter = await Products({name: search})

    res.send(searchProductFilter)

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
