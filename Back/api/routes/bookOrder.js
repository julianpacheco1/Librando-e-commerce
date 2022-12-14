const express = require("express");
const router = express.Router();
const bookOrders_controller = require("../controllers/bookOrdersController.js");
const { validateAdmin } = require("../middlewares/auth");

// GET ALL BOOK ORDERS
router.get("/", validateAdmin, bookOrders_controller.index);

// GET BOOK ORDERS BY ORDER ID
router.get("/:orderId", validateAdmin, bookOrders_controller.findByOrderId);

// CREATE BOOK ORDERS
router.post("/create", validateAdmin, bookOrders_controller.createBookOrder);

module.exports = router;
