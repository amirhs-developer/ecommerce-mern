const Enquiry = require("../models/enqModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

//? Create a Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//? Update a Enquiry
const updateOneEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updateOneEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateOneEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get One Enquiry
const getOneEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getOneEnquiry = await Enquiry.findById(id);
    res.json(getOneEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get All Enquirys
const getAllEnquiry = asyncHandler(async (req, res) => {
  try {
    const Enquirys = await Enquiry.find();
    if(!Enquirys){
        res.json({message: 'no Enquirys'});
    }
    res.json(Enquirys);
  } catch (error) {
    throw new Error(error);
  }
});

//? Delete a Enquiry
const deleteOneEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteOneEnquiry = await Enquiry.findByIdAndDelete(id, {
      new: true,
    });
    res.json(deleteOneEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createEnquiry,
  updateOneEnquiry,
  deleteOneEnquiry,
  getOneEnquiry,
  getAllEnquiry,
};
