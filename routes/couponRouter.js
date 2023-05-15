const express = require("express");
const router = express.Router();
const {
  createCoupon,
  getAllCoupons,
  updateOneCoupon,
  deleteOneCoupon
} = require("../controller/couponController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post("/", jwtAuthenticationMiddleware, isAdminMiddleware, createCoupon);
router.get("/", jwtAuthenticationMiddleware, isAdminMiddleware, getAllCoupons);
router.put("/:id",jwtAuthenticationMiddleware, isAdminMiddleware,updateOneCoupon);
router.delete("/:id",jwtAuthenticationMiddleware, isAdminMiddleware,deleteOneCoupon);

module.exports = router;
