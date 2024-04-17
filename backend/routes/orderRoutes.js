const express = require("express");
const {
  addOrder,
  removeOrder,
  getAllOrders,
  getOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.get("/all", getAllOrders);
router.get("/order/:id", getOrder);
router.post("/add", addOrder);
router.delete("/delete/:id", removeOrder);

module.exports = router;
