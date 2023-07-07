const express = require("express");
const router = express.Router();
const {
    createBrand,
    updateOneBrand,
    deleteOneBrand,
    getOneBrand,
    getAllBrand,
} = require("../controller/brandController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post(
  "/",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  createBrand
);
router.get("/all-brands", getAllBrand);
router.get("/:id", getOneBrand);
router.put(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  updateOneBrand
);
router.delete(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  deleteOneBrand
);
module.exports = router;
