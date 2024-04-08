const express = require("express");
const {
  addProduct,
  removeProduct,
  updateProduct,
  viewProductByCategory,
  getProduct,
  getAllProducts
} = require("../controllers/productController.js");

const router = express.Router();

//Visa alla produkter
router.get("/all", getAllProducts);

//Visa enskild produkt baserat på ID
router.get('/id/:id', getProduct);

//Visa produkter efter Kategori
router.get('/category/:category', viewProductByCategory);

//Lägg till produkt
router.post("/add", addProduct);

//Ta bort en produkt
router.delete("/delete/:id", removeProduct);

//Redigera produkt
router.put("/update/:id", updateProduct);

module.exports = router;
