const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

//? Create a Color
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

//? Update a Color
const updateOneColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updateOneColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateOneColor);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get One Color
const getOneColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getOneColor = await Color.findById(id);
    res.json(getOneColor);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get All Colors
const getAllColor = asyncHandler(async (req, res) => {
  try {
    const Colors = await Color.find();
    if(!Colors){
        res.json({message: 'no Colors'});
    }
    res.json(Colors);
  } catch (error) {
    throw new Error(error);
  }
});

//? Delete a Color
const deleteOneColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteOneColor = await Color.findByIdAndDelete(id, {
      new: true,
    });
    res.json(deleteOneColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createColor,
  updateOneColor,
  deleteOneColor,
  getOneColor,
  getAllColor,
};
