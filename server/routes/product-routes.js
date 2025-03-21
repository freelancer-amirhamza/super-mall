const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/product-controllers.js");
const auth = require("../middleware/auth.js");

router.post("/create", auth, addProduct);



module.exports = router;