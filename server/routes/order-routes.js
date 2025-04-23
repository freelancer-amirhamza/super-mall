const express = require("express");
const auth = require("../middleware/auth");
const { cashOnDeliveryOrder } = require("../controllers/order-controllers");
const router = express.Router();




router.post("/cash-on-delivery", auth, cashOnDeliveryOrder);

module.exports = router;