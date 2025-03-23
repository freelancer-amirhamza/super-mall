const express = require("express");
const router = express.Router();
const { addProduct, getProduct } = require("../controllers/product-controllers.js");
const auth = require("../middleware/auth.js");

router.post("/create", auth, addProduct);
router.post("/get", getProduct)



module.exports = router;