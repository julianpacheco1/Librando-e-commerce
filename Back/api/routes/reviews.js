const express = require("express");
const router = express.Router();
const review_controller = require("../controllers/reviewController.js");

//GET ALL REVIEWS AND RATES
router.get("/", review_controller.index);

// GET REVIEW AND RATE BY BOOK ID
router.get("/:id", review_controller.getByBookId);

//GET RATES AVERAGES BY BOOK ID
router.get("/rates/:id", review_controller.getRatesAvgByBookId);

//ADD REVIEW
router.post("/new", review_controller.createReviewByBookId);

module.exports = router;
