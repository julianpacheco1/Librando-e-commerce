const bookOrderService = require("../services/bookOrderService.js");

exports.index = (req, res) => {
  bookOrderService
    .findAll()
    .then((bookOrders) => res.status(200).send(bookOrders))
    .catch((err) => res.status(400).send(err));
};

exports.findByOrderId = (req, res) => {
  const id = req.params.orderId;
  bookOrderService
    .findByOrderId(id)
    .then((bookOrders) => res.status(200).send(bookOrders))
    .catch((err) => res.status(400).send(err));
};

exports.createBookOrder = (req, res) => {
  const bookOrder = req.body;
  bookOrderService
    .create(bookOrder)
    .then((bookOrderCreated) => res.status(201).send(bookOrderCreated))
    .catch((err) => res.status(400).send(err));
};
