const Sequelize = require("sequelize");
const db = require("../config/db");

class Review extends Sequelize.Model {}

Review.init(
  {
    comment: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "review",
  }
);

module.exports = Review;
