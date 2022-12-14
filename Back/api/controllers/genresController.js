const genreService = require("../services/genreService.js");

exports.index = (req, res) => {
  genreService
    .findAll()
    .then((genres) => res.status(200).send(genres))
    .catch((err) => res.status(400).send(err));
};

exports.findByGenreId = (req, res) => {
  const id = req.params.id;
  genreService
    .findById(id)
    .then((genre) => res.status(200).send(genre))
    .catch((err) => res.status(400).send(err));
};

exports.findBooksByGenreIdOrName = (req, res) => {
  const queryString = req.params.queryString;
  genreService
    .findBooksByGenreIdOrName(queryString)
    .then((books) => res.status(200).send(books))
    .catch((err) => res.status(400).send(err));
};

exports.createGenre = (req, res) => {
  const genre = req.body;
  genreService
    .create(genre)
    .then((genreCreated) => res.status(201).send(genreCreated))
    .catch((err) => res.status(400).send(err));
};

exports.changeGenre = (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  genreService
    .change(id, changes)
    .then((genreUpdated) => res.status(201).send(genreUpdated))
    .catch((err) => res.status(400).send(err));
};

exports.deleteGenre = (req, res) => {
  const id = req.params.id;
  genreService
    .delete(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(404).send(err));
};
