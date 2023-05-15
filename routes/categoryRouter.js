const express = require("express");
const router = express.Router();
const {
  createCategory,
  updateOneCategory,
  deleteOneCategory,
  getOneCategory,
  getAllCategory,
} = require("../controller/categoryController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post(
  "/",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  createCategory
);
router.get("/all-categories/", getAllCategory);
router.get("/:id", getOneCategory);
router.put(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  updateOneCategory
);
router.delete(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  deleteOneCategory
);
module.exports = router;
