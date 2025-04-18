const express = require("express");
const { addToCartItem, getCartItems } = require("../controllers/cart-controllers");
const auth = require("../middleware/auth");
const router = express.Router();


router.post("/create", auth, addToCartItem);
router.get("/get-carts", auth, getCartItems);



module.exports = router;