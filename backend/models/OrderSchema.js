const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  price: { type: Number },
  fullName: { 
    type: String, 
    required: true, 
    match: /[a-zA-Z\s]+[a-zA-Z]+/,
    minlength: 2,
    maxLength: 50 
  },
  phone: { type: Number },
  email: { type: String },
  address: { 
    type: String, 
    required: true, 
    minlength: 2, 
    maxLength: 50 
  },
  status: { 
    type: String, 
    enum: ['Väntar', 'Packad', 'Levererad', 'Makulerad', 'Betald'], 
    default: 'Väntar' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;
