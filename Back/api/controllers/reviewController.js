const reviewService = require("../services/reviewService.js");

exports.index = (req, res) => {
  reviewService
    .findAll()
    .then((reviews) => res.status(200).send(reviews))
    .catch((err) => res.status(400).send(err));
};

exports.getByBookId = (req, res) => {
  const bookId = req.params.id;
  reviewService
    .getByBookId(bookId)
    .then((reviews) => res.status(200).send(reviews))
    .catch((err) => res.status(400).send(err));
};

exports.getRatesAvgByBookId = (req, res) => {
  const bookId = req.params.id;
  reviewService
    .getRatesAvgByBookId(bookId)
    .then((rate) => res.status(200).send(rate))
    .catch((err) => res.status(400).send(err));
};

exports.createReviewByBookId = (req, res) => {
  const review = req.body;
  reviewService
    .create(review)
    .then((reviewCreated) => res.status(201).send(reviewCreated))
    .catch((err) => res.status(412).send(String(err)));
};
