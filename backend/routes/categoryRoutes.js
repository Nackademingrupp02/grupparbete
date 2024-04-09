const express = require("express");
const {
  addCategory,
  removeCategory,
  getAllCategorys,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/all", getAllCategorys);
router.post("/add", addCategory);
router.delete("/delete/:id", removeCategory);

module.exports = router;
