const express = require("express");
const router = express.Router();
const order_controller = require("../controllers/orderController.js");
const { validateAdmin } = require("../middlewares/auth");

// GET ORDER BY ID
router.get("/:id", order_controller.findByOrderId);

// GET ORDERS BY USER ID
router.get("/userOrders/:id", order_controller.getOrdersByUserId);

//ADMIN ROUTES

// GET ALL ORDERS
router.get("/", validateAdmin, order_controller.index);

// CREATE NEW ORDER
router.post("/create", validateAdmin, order_controller.createOrder);

// CHANGE ORDER
router.put("/change/:id", validateAdmin, order_controller.changeOrder);

module.exports = router;
