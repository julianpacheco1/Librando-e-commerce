const { BookOrder, Book, Order } = require("../models");

exports.findAll = () => {
  return BookOrder.findAll();
};

exports.findByOrderId = async (id) => {
  let bookOrders = await BookOrder.findAll({
    where: { orderId: id },
  });
  for (let i = 0; i < bookOrders.length; i++) {
    let bookId = bookOrders[i].bookId;
    let findBook = await Book.findByPk(bookId);
    bookOrders[i].dataValues.book = findBook;
  }
  return bookOrders;
};

exports.create = async (bookOrder) => {
  let bookId = bookOrder.bookId;
  let book = await Book.findByPk(bookId);
  let total = book.price * bookOrder.quantity;
  let newBookOrder = {
    quantity: bookOrder.quantity,
    total: total,
    orderId: bookOrder.orderId,
    bookId: bookId,
  };

  // Update Order total
  let order = await Order.findByPk(bookOrder.orderId);
  let orderTotal = order.total;
  await order.update({ total: orderTotal + total });

  // Update book stock
  let newStock = book.stock - bookOrder.quantity;
  await book.update({ stock: newStock });

  return BookOrder.create(newBookOrder);
};
