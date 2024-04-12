const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxLength: 75,
    required: true,
    match: /[a-zA-Z\s]+[a-zA-Z]+/,
    trim: true,
  },
  desc: {
    type: String,
    minlength: 5,
    maxLength: 500,
    trim: true,
    match: /[a-zA-Z0-9\s]+[a-zA-Z0-9]+/,
  },
});
const Categorys = mongoose.model("Category", categorySchema);

module.exports = Categorys;
