const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  price: { type: Number },
  fullName: { type: String, required: true, match: /[a-zA-Z\s]+[a-zA-Z]+/ },
  phone: { type: Number },
  email: { type: String },
  address: { type: String },
  status: { type: String, enum: ['waiting', 'packed', 'delivered', 'declined'], default: 'waiting' }
});

const Orders = mongoose.model("Orders", orderSchema)

module.exports = Orders