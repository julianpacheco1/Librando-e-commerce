const createUsers = require("./users");
const createBooks = require("./books");
const createPayments = require("./payments");
const createStatus = require("./status");
const createOrders = require("./orders");
const createBookOrders = require("./book_orders");
const createReviews = require("./reviews");

createUsers()
  .then(() => createBooks())
  .then(() => createPayments())
  .then(() => createStatus())
  .then(() => createOrders())
  .then(() => createBookOrders())
  .then(() => createReviews());
