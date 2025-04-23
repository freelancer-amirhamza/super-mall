const express = require("express");
const auth = require("../middleware/auth");
const { cashOnDeliveryOrder, getOrderDetails } = require("../controllers/order-controllers");
const router = express.Router();




router.post("/cash-on-delivery", auth, cashOnDeliveryOrder);
router.get("/get-order-details", auth, getOrderDetails);

module.exports = router;