const userService = require("../services/userService");
const emailService = require("../services/emailService");
const { generateToken } = require("../config/tokens");

exports.getUsers = (req, res) => {
  userService
    .findAll()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  userService
    .findOne(id)
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(400).send(err));
};

exports.createUser = (req, res) => {
  const user = req.body;
  userService
    .create(user)
    .then((newUser) => {
      emailService.sendRegisterEmail(newUser);
      res.status(201).send(newUser);
    })
    .catch((err) => res.status(400).send(err));
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  userService
    .login(email, password)
    .then((payload) => {
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    })
    .catch((err) => res.status(401).send(String(err)));
};

exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

exports.editUser = (req, res) => {
  const id = req.params.id;
  userService.change(id, req.body).then((updatedUser) => res.send(updatedUser));
};

exports.getMe = (req, res) => {
  res.send(req.user);
};

exports.promoveAdmin = (req, res) => {
  const id = req.params.id;
  userService.promove(id).then(() => res.sendStatus(200));
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  userService.delete(id).then(() => res.sendStatus(202));
};
