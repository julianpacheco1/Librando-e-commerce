const statusService = require("../services/statusService");

exports.index = (req, res) => {
  statusService
    .findAll()
    .then((status) => res.status(200).send(status))
    .catch((err) => res.status(400).send(err));
};

exports.createStatus = (req, res) => {
  const status = req.body;
  statusService
    .create(status)
    .then((statusCreated) => res.status(201).send(statusCreated))
    .catch((err) => res.status(400).send(err));
};

exports.deleteStatus = (req, res) => {
  const id = req.params.id;
  statusService
    .delete(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(404).send(err));
};
