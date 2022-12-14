const express = require("express");
const router = express.Router();

const users = require("./users.js");
const books = require("./books.js");
const orders = require("./order.js");
const status = require("./status.js");
const paymentMethods = require("./paymentMethods");
const reviews = require("./reviews.js");
const bookOrder = require("./bookOrder.js");
const genres = require("./genres.js");
const orderCreator = require("./orderCreator.js");

router.use("/users", users);
router.use("/books", books);
router.use("/order", orders);
router.use("/status", status);
router.use("/paymentMethods", paymentMethods);
router.use("/reviews", reviews);
router.use("/bookOrder", bookOrder);
router.use("/genres", genres);
router.use("/orderCreator", orderCreator);

module.exports = router;
