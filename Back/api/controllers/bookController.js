const bookService = require("../services/bookService.js");

exports.index = (req, res) => {
  bookService
    .findAll()
    .then((books) => res.status(200).send(books))
    .catch((err) => res.status(400).send(err));
};

exports.findById = (req, res) => {
  const id = req.params.id;
  bookService
    .findById(id)
    .then((books) => res.status(200).send(books))
    .catch((err) => res.status(400).send(err));
};

exports.createBook = (req, res) => {
  const book = req.body;
  bookService
    .create(book)
    .then((bookCreated) => res.status(201).send(bookCreated))
    .catch((err) => res.status(400).send(err));
};

exports.changeBook = (req, res) => {
  const id = req.params.id;
  bookService
    .change(id, req.body)
    .then((updatedbook) => res.status(200).send(updatedbook))
    .catch((err) => res.status(404).send(err));
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;
  bookService
    .delete(id)
    .then(() => res.status(204).send("Book deleted"))
    .catch((err) => res.status(404).send(err));
};

exports.searchByQueryString = (req, res) => {
  const queryString = req.params.queryString;
  bookService
    .searchByQueryString(queryString)
    .then((books) => res.status(200).send(books))
    .catch((err) => res.status(400).send(err));
};
