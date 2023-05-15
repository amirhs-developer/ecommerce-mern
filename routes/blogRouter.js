const express = require("express");
const router = express.Router();
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");
const {
  createBlog,
  updateOneBlog,
  getOneBlog,
  getAllBlogs,
  deleteOneBlog,
  LikeOneBlog,
  dislikeOneBlog,
  UploadImages
} = require("../controller/blogController");

const {
  uploadPhoto,
  blogImageResize,
} = require("../middleware/uploadImages");

router.post("/", jwtAuthenticationMiddleware, isAdminMiddleware, createBlog);
router.get("/all-blogs", getAllBlogs);
router.put(
  "/upload/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  uploadPhoto.array("images", 10),
  blogImageResize,
  UploadImages
);
router.put('/likes',jwtAuthenticationMiddleware,LikeOneBlog);
router.put('/dislikes',jwtAuthenticationMiddleware,dislikeOneBlog);
router.put(
  "/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  updateOneBlog
);
router.get("/:id", getOneBlog);
router.delete("/:id", jwtAuthenticationMiddleware, isAdminMiddleware, deleteOneBlog);


module.exports = router;
