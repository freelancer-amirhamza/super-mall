const express = require("express");
const auth = require("../middleware/auth");
const { addCategory, getCategory } = require("../controllers/category-controller");

const router = express.Router();


router.post("/add-category", auth, addCategory);
router.get("/get-category", getCategory);


module.exports = router;