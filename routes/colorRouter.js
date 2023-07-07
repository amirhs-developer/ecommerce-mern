const express = require("express");
const router = express.Router();
const {
    createColor,
    updateOneColor,
    deleteOneColor,
    getOneColor,
    getAllColor,
} = require("../controller/ColorController");
const {
    jwtAuthenticationMiddleware,
    isAdminMiddleware,
} = require("../middleware/jwtAuthenticationMiddleware");

router.post(
    "/",
    jwtAuthenticationMiddleware,
    isAdminMiddleware,
    createColor
);
router.get("/all-colors", getAllColor);

router.get("/:id", getOneColor);

router.put(
    "/:id",
    jwtAuthenticationMiddleware,
    isAdminMiddleware,
    updateOneColor
);
router.delete(
    "/:id",
    jwtAuthenticationMiddleware,
    isAdminMiddleware,
    deleteOneColor
);
module.exports = router;
