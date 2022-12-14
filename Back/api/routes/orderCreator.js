const express = require("express");
const router = express.Router();
const orderCreator_controller = require("../controllers/orderCreatorController.js");

// CREATE A FULL ORDER
router.post("/", orderCreator_controller.createFullOrder);

module.exports = router;
