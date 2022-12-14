const express = require("express");
const router = express.Router();
const { validateAdmin } = require("../middlewares/auth");
const book_controller = require("../controllers/bookController.js");

// GET ALL PRODUCTS
router.get("/", book_controller.index);

// GET PRODUCT BY ID
router.get("/:id", book_controller.findById);

// SEARCH PRODUCT
router.get("/search/:queryString", book_controller.searchByQueryString);

//ADMIN ROUTES

// CREATE NEW PRODUCT
router.post("/create", validateAdmin, book_controller.createBook);

// CHANGE PRODUCT
router.put("/change/:id", validateAdmin, book_controller.changeBook);

// SOFT DELETE PRODUCT
router.put("/delete/:id", validateAdmin, book_controller.deleteBook);

module.exports = router;
