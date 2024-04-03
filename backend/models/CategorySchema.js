// Avaktar med denna

const mongoose = require("mongoose");
// schema of category
const categorySchema = new mongoose.Schema({
    name: { type: String, minlength: 2, maxLength: 75, required: true },

    
});
const category = mongoose.model("category", categorySchema);

module.exports = category;
