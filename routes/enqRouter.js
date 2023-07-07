const express = require("express");
const router = express.Router();
const {
  createEnquiry,
  updateOneEnquiry,
  deleteOneEnquiry,
  getOneEnquiry,
  getAllEnquiry,
} = require("../controller/enqController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post("/", createEnquiry);
router.get("/all-enquires", getAllEnquiry);
router.get("/:id", getOneEnquiry);
router.put(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  updateOneEnquiry
);
router.delete(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  deleteOneEnquiry
);
module.exports = router;
