const Sequelize = require("sequelize");
const db = require("../config/db");

class BookOrder extends Sequelize.Model {}

BookOrder.init(
  {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "book_order",
  }
);

module.exports = BookOrder;