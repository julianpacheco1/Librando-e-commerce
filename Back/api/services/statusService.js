const { Status } = require("../models");

exports.findAll = () => {
  return Status.findAll();
};

exports.create = (status) => {
  return Status.create(status);
};

exports.delete = async (id) => {
  return Status.destroy({ where: { id: id } });
};
