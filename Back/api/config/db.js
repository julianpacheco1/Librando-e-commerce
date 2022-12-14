const Sequelize = require("sequelize");

const db = new Sequelize("librando", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
