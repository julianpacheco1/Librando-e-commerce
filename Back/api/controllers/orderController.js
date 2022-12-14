const orderService = require("../services/orderService.js");

exports.index = (req, res) => {
  orderService
    .findAll()
    .then((orders) => res.status(200).send(orders))
    .catch((err) => res.status(400).send(err));
};

exports.findByOrderId = (req, res) => {
  const orderId = req.params.id;
  orderService
    .findByOrderId(orderId)
    .then((order) => res.status(200).send(order))
    .catch((err) => res.status(400).send(err));
};

exports.createOrder = async (req, res) => {
  const order = req.body;
  orderService
    .create(order)
    .then((orderCreated) => res.status(201).send(orderCreated))
    .catch((err) => res.status(400).send(err));
};

exports.getOrdersByUserId = (req, res) => {
  const userId = req.params.id;
  orderService
    .ordersByUser(userId)
    .then((orders) => res.status(200).send(orders))
    .catch((err) => res.status(400).send(err));
};

exports.changeOrder = (req, res) => {
  const orderId = req.params.id;
  const changes = req.body;
  orderService
    .changeOrder(orderId, changes)
    .then((statusChanged) => res.send(statusChanged))
    .catch((err) => res.status(400).send(err));
};
