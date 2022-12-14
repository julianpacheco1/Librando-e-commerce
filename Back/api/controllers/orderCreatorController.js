const orderCreatorService = require("../services/orderCreatorService.js");
const emailService = require("../services/emailService");

exports.createFullOrder = (req, res) => {
  orderCreatorService
    .createFullOrder(req.body)
    .then((order) => {
      emailService.sendCheckoutEmail(order);
      res.status(201).send(order);
    })
    .catch((err) => res.status(400).send(err));
};
