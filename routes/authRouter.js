const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  blockOneUser,
  unblockOneUser,
  refreshTokenHandler,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishListUser,
  saveAddressUser
} = require("../controller/UserController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post("/register", createUser);
router.post("/login", loginUser);
router.post('/login-admin',loginAdmin);
router.put('/password',jwtAuthenticationMiddleware,updatePassword)
router.post('/forgot-password-token',forgotPasswordToken);
router.put('/reset-password/:token',resetPassword);
router.get("/all-users", getAllUsers);
router.get('/wishlist',jwtAuthenticationMiddleware,getWishListUser);
router.get("/refresh", refreshTokenHandler);
router.get("/logout", logout);
router.get("/:id", jwtAuthenticationMiddleware, isAdminMiddleware, getOneUser);
router.put("/update-user", jwtAuthenticationMiddleware, updateOneUser);
router.put('/save-address', jwtAuthenticationMiddleware,saveAddressUser);
router.put(
  "/block-user/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  blockOneUser
);
router.put(
  "/unblock-user/:id",
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
  unblockOneUser
);
router.delete("/:id", deleteOneUser);

module.exports = router;
