const express = require("express");
const auth = require("../middleware/auth");
const { addAddress } = require("../controllers/address-controllers");
const router = express.Router();


router.post("/create", auth, addAddress);


module.exports = router;