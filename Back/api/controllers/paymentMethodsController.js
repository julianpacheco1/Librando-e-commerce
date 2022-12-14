const paymentMethodsService = require("../services/paymentMethodsService");

exports.index = (req, res) => {
  paymentMethodsService
    .findAll()
    .then((pm) => res.status(200).send(pm))
    .catch((err) => res.status(400).send(err));
};

exports.createPM = (req, res) => {
  const paymentMethod = req.body;
  paymentMethodsService
    .create(paymentMethod)
    .then((pmCreated) => res.status(201).send(pmCreated))
    .catch((err) => res.status(400).send(err));
};

exports.deletePM = (req, res) => {
  const id = req.params.id;
  paymentMethodsService
    .delete(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(404).send(err));
};
