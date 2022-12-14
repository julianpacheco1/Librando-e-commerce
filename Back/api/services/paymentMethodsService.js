const { PaymentMethod } = require("../models");

exports.findAll = () => {
  return PaymentMethod.findAll();
};

exports.create = (paymentMethod) => {
  return PaymentMethod.create(paymentMethod);
};

exports.delete = async (id) => {
  return PaymentMethod.destroy({ where: { id: id } });
};
