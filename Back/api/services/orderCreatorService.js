const orderService = require("./orderService");
const bookOrderService = require("./bookOrderService");

exports.createFullOrder = async (fullOrder) => {
  let user = fullOrder.userData;
  let order = fullOrder.orderData;
  let bookOrders = fullOrder.bookOrdersData;
  let userId = user[0].id;

  // AGREGO EL STATUS DE LA ORDEN DE ACUERDO AL PAYMENT METHOD
  let orderWithStatus = await getOrderStatus(order);

  // CREO LA ORDEN VACIA y ME QUEDO CON EL ID DE LA ORDEN PARA LOS BOOK ORDER
  let orderCreatedId = await createEmptyOrder(userId, orderWithStatus);

  // CREO LOS BOOK ORDER CON EL ID DE LA ORDEN
  await createBookOrders(orderCreatedId, bookOrders);

  //RECUPERO LA ORDEN COMPLETA PARA DEVOLVERLA EN EL RESPONSE
  let finishedOrder = await orderService.findByOrderId(orderCreatedId);

  return finishedOrder;
};

// ASYNC FUNCTIONS

async function getOrderStatus(order) {
  let paymentMethodId = order[0].paymentMethodId;
  let orderStatus = 0;
  if (paymentMethodId === 3) {
    orderStatus = 2;
  } else {
    orderStatus = 1;
  }
  let orderWithStatus = [
    {
      statusId: orderStatus,
      paymentMethodId: paymentMethodId,
    },
  ];
  return orderWithStatus;
}

async function createEmptyOrder(userId, order) {
  let newOrder = {
    userId: userId,
    statusId: order[0].statusId,
    paymentMethodId: order[0].paymentMethodId,
  };
  let orderCreated = await orderService.create(newOrder);
  return orderCreated.id;
}

async function createBookOrders(orderCreatedId, bookOrders) {
  for (let i = 0; i < bookOrders.length; i++) {
    let newBookOrder = {
      orderId: orderCreatedId,
      quantity: bookOrders[i].quantity,
      bookId: bookOrders[i].bookId,
    };
    await bookOrderService.create(newBookOrder);
  }
}
