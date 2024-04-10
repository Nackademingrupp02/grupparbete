

const express = require("express");


const {
  addProduct,
  removeProduct,
  updateProduct,
  viewProductByCategory,
  getProduct,
  getAllProducts,
  searchProducts
} = require("../controllers/productController.js");
router.use()
const router = express.Router();
router.use(express.urlencoded())
router.use(express.json())
//Visa alla produkter
router.get("/all", getAllProducts);

//Visa enskild produkt baserat på ID
router.get("/id/:id", getProduct);

//Visa produkter efter Kategori
router.get("/category/:category", viewProductByCategory);

//Lägg till produkt
router.post("/add", addProduct);

//Ta bort en produkt
router.delete("/delete/:id", removeProduct);

//Redigera produkt
router.put("/update/:id", updateProduct);

router.get("/search", (req,res)=>{
  const searchName = req.query.searchName
  res.json(searchName)
})

module.exports = router;
