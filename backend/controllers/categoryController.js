const Categorys = require("../models/CategorySchema");
const { categoryErrorHandler } = require("../util/apiHelpers");

async function getAllCategorys(req, res) {
  try {
    const categorys = await Categorys.find();
    res.json(categorys);
  } catch (error) {
    categoryErrorHandler(error, res);
  }
}

async function addCategory(req, res) {
  try {
    const _category = req.body;
    const category = await Categorys.create(_category);
    if (!category) {
      throw new Error("Cast to ObjectId");
    }
    res.status(201).json(category);
  } catch (error) {
    categoryErrorHandler(error, res);
  }
}

async function removeCategory(req, res) {
  const { id } = req.params;
  try {
    const category = await Categorys.findByIdAndDelete(id);
    if (!category) {
      throw new Error("Cast to ObjectId");
    }
    res.status(204).json();
  } catch (error) {
    categoryErrorHandler(error, res);
  }
}

module.exports = { getAllCategorys, addCategory, removeCategory };
