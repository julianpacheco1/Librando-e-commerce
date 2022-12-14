const Sequelize = require("sequelize");
const db = require("../config/db");

class PaymentMethod extends Sequelize.Model {}

PaymentMethod.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "payment_method",
  }
);

module.exports = PaymentMethod;
