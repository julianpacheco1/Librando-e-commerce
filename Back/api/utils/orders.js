const { Order } = require("../models");

// No es necesario pasar un total de la orden. Es un valor que se autocalcula cuando se agregan los bookOrders

const orders = [
  {
    userId: 1,
    statusId: 1,
    paymentMethodId: 1,
    total: 0,
  },
  {
    userId: 2,
    statusId: 1,
    paymentMethodId: 2,
    total: 0,
  },
  {
    userId: 1,
    statusId: 2,
    paymentMethodId: 3,
    total: 0,
  },
  {
    userId: 1,
    statusId: 1,
    paymentMethodId: 4,
    total: 0,
  },
];

async function createOrders() {
  Order.bulkCreate(orders).then(() => {
    console.log("ORDERS todo bien");
  });
}

module.exports = createOrders;
