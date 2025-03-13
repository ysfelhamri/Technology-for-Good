//to define  routes

const express = require("express");
const router = express.Router();
const priceController = require("../controllers/priceController");

router.get("/prices", priceController.getPrices);

module.exports = router;