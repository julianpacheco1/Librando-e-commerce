const express = require("express");
const router = express.Router();
const genres_controller = require("../controllers/genresController.js");
const { validateAdmin } = require("../middlewares/auth");

// GET ALL GENRES
router.get("/", genres_controller.index);

// GET GENRE BY ID
router.get("/:id", genres_controller.findByGenreId);

// GET PRODUCTS BY GENRE ID OR GENRE NAME
router.get("/list/:queryString", genres_controller.findBooksByGenreIdOrName);

//ADMIN ROUTES

// CREATE GENRE
router.post("/create", validateAdmin, genres_controller.createGenre);

// CHANGE GENRE
router.put("/change/:id", validateAdmin, genres_controller.changeGenre);

// DELETE GENRE
router.delete("/delete/:id", validateAdmin, genres_controller.deleteGenre);

module.exports = router;
