const { User } = require("../models");
const bcrypt = require("bcrypt");

const users = [
  {
    name: "User",
    lastname: "User",
    email: "user@user.com",
    password: "1234",
    dni: 1234567,
    address: "Calle,numero,piso,depto,ciudad,provincia,cpa",
    isAdmin: false,
    salt: "",
  },
  {
    name: "Admin",
    lastname: "Admin",
    email: "admin@admin.com",
    password: "1234",
    dni: 7654321,
    address: "Calle,numero,piso,depto,ciudad,provincia,cpa",
    isAdmin: true,
    salt: "",
  },
];

async function createUsers() {
  users[0].salt = bcrypt.genSaltSync();
  users[1].salt = bcrypt.genSaltSync();
  return bcrypt
    .hash(users[0].password, users[0].salt)
    .then((hashed) => (users[0].password = hashed))
    .then(() => bcrypt.hash(users[1].password, users[1].salt))
    .then((hashed) => (users[1].password = hashed))
    .then(() =>
      User.bulkCreate(users).then(() => {
        console.log("USERS todo bien");
      })
    );
}

module.exports = createUsers;
