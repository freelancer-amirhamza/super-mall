const express = require("express");
const auth = require("../middleware/auth");
const { addAddress, getAddress } = require("../controllers/address-controllers");
const router = express.Router();


router.post("/create", auth, addAddress);
router.get("/get", auth, getAddress)


module.exports = router;