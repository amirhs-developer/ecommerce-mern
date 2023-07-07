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
  saveAddressUser,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrderByUserId,
  updateOrderStatus
} = require("../controller/UserController");
const {
  jwtAuthenticationMiddleware,
  isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post("/register", createUser);
router.post("/login", loginUser);
router.post('/login-admin',loginAdmin);
router.post('/cart',jwtAuthenticationMiddleware,userCart);
router.post('/cart/apply-coupon',jwtAuthenticationMiddleware,applyCoupon);
router.post('/cart/cash-order',jwtAuthenticationMiddleware,createOrder);
router.put('/password',jwtAuthenticationMiddleware,updatePassword)
router.post('/forgot-password-token',forgotPasswordToken);
router.put('/reset-password/:token',resetPassword);
router.put('/update-order/:id',jwtAuthenticationMiddleware,isAdminMiddleware,updateOrderStatus);
router.get("/all-users", getAllUsers);
router.get('/wishlist',jwtAuthenticationMiddleware,getWishListUser);
router.get("/refresh", refreshTokenHandler);
router.get("/logout", logout);
router.get('/get-cart', jwtAuthenticationMiddleware,getUserCart);
router.get("/:id", jwtAuthenticationMiddleware, isAdminMiddleware, getOneUser);
router.get('get-orders',jwtAuthenticationMiddleware,getOrderByUserId);
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
router.delete('/empty-cart', jwtAuthenticationMiddleware, emptyCart);
router.delete("/:id", deleteOneUser);

module.exports = router;
