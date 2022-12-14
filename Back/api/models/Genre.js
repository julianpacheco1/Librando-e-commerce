const Sequelize = require("sequelize");
const db = require("../config/db");

class Genre extends Sequelize.Model {}

Genre.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "genre",
  }
);

module.exports = Genre;
