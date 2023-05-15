const Category = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

//? Create a Category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//? Update a Category
const updateOneCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updateOneCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateOneCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get One Category
const getOneCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getOneCategory = await Category.findById(id);
    res.json(getOneCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get All Categories
const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find();
    if(!categories){
        res.json({message: 'no categories'});
    }
    res.json(categories);
  } catch (error) {
    throw new Error(error);
  }
});

//? Delete a Category
const deleteOneCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteOneCategory = await Category.findByIdAndDelete(id, {
      new: true,
    });
    res.json(deleteOneCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  updateOneCategory,
  deleteOneCategory,
  getOneCategory,
  getAllCategory,
};
