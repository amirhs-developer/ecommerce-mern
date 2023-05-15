const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler"); // for handling async error
const validateMongodbId = require("../utils/validateMongodbId"); // validation of mongodb id

//? Create Coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const createCoupon = await Coupon.create(req.body);
    res.json(createCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//? Update One Coupon
const updateOneCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updateOneCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateOneCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//? Get all Coupons
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

//? Delete One Coupon
const deleteOneCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteOneCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteOneCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getAllCoupons,
  updateOneCoupon,
  deleteOneCoupon,
};
