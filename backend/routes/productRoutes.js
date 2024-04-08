const express = require("express");
const {
  addProduct,
  removeProduct,
  updateProduct,
} = require("../controllers/productController.js");

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const products = await productController.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add", addProduct);
router.delete("/delete/:id", removeProduct);
router.put("/update/:id", updateProduct);

module.exports = router;
