const express = require("express");
const {
  addOrder,
  removeOrder,
  getAllOrders,
  getOrder,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.get("/all", getAllOrders);
router.get("/order/:id", getOrder);
router.post("/add", addOrder);
router.delete("/delete/:id", removeOrder);
router.put("/update/:id/status", updateOrderStatus);

module.exports = router;
