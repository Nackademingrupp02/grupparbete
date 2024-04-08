// Avaktar med denna

const mongoose = require("mongoose");
// schema of category
const categorySchema = new mongoose.Schema({
  name: { type: String, minlength: 2, maxLength: 75, required: true },
  desc: [{ type: String, minlength: 5, maxLength: 500 }],
});
const category = mongoose.model("Category", categorySchema);

module.exports = category;
