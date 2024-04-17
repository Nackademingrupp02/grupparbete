const Orders = require("../models/OrderSchema");

async function getAllOrders(req, res) {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (error) {}
}

async function getOrder(req, res) {
  const { id } = req.params;
  try {
    const order = await Orders.findById(id);
    if (!order) {
      throw new Error("Cast to ObjectId");
    }
    res.json(order);
  } catch (error) {}
}

async function addOrder(req, res) {
  try {
    const _order = req.body;
    const order = await Orders.create(_order);
    if (!order) {
      throw new Error("Cast to ObjectId");
    }
    res.status(201).json(order);
  } catch (error) {}
}

async function removeOrder(req, res) {
  const { id } = req.params;
  try {
    const order = await Orders.findByIdAndDelete(id);
    if (!order) {
      throw new Error("Cast to ObjectId");
    }
    res.status(204).json();
  } catch (error) {}
}

module.exports = { getAllOrders, addOrder, removeOrder, getOrder };
