const { User } = require("../models");

exports.findAll = () => {
  return User.findAll();
};

exports.findOne = async (id) => {
  let user = await User.findByPk(id, {
    attributes: {
      exclude: ["createdAt", "updatedAt", "password", "salt", "isAdmin"],
    },
  });
  return user;
};

exports.create = (user) => {
  return User.create(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw Error("Usuario no encontrado");
  const validate = await user.validatePassword(password);
  if (!validate) throw Error("Contraseña incorrecta");
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    isAdmin: user.isAdmin,
  };
};

exports.change = (id, body) => {
  return User.findByPk(id).then((user) => user.update(body));
};

exports.promove = (id) => {
  return User.findByPk(id).then((user) => user.update({ isAdmin: true }));
};

exports.delete = (id) => {
  return User.destroy({ where: { id } });
};
