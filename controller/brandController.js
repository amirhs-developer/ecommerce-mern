const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

//? Create a Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//? Update a Brand
const updateOneBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updateOneBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateOneBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get One Brand
const getOneBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getOneBrand = await Brand.findById(id);
    res.json(getOneBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get All Brands
const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.find();
    if(!brands){
        res.json({message: 'no brands'});
    }
    res.json(brands);
  } catch (error) {
    throw new Error(error);
  }
});

//? Delete a Brand
const deleteOneBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteOneBrand = await Brand.findByIdAndDelete(id, {
      new: true,
    });
    res.json(deleteOneBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateOneBrand,
  deleteOneBrand,
  getOneBrand,
  getAllBrand,
};
