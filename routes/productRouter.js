const express = require("express");
const router = express.Router();
require("dotenv").config(); // configuration variables
const {
  createProduct,
  getOneProduct,
  getAllProducts,
  updateOneProduct,
  deleteOneProduct,
  addToWishList,
  rating,
  UploadImages
} = require("../controller/ProductController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

const {
  uploadPhoto,
  productImageResize,
} = require("../middleware/uploadImages");

router.post("/", jwtAuthenticationMiddleware, isAdminMiddleware, createProduct);
router.put(
  "/upload/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  uploadPhoto.array("images", 10),
  productImageResize,
  UploadImages
);
router.put("/wishlist", jwtAuthenticationMiddleware, addToWishList);
router.put("/rating", jwtAuthenticationMiddleware, rating);
router.get("/all-product", jwtAuthenticationMiddleware, getAllProducts);
router.get("/:id", getOneProduct);
router.put(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  updateOneProduct
);
router.delete(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  deleteOneProduct
);

module.exports = router;
