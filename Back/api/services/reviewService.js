const orderService = require("../services/orderService.js");
const { Review, User } = require("../models");

exports.findAll = () => {
  return Review.findAll();
};

exports.getByBookId = async (bookId) => {
  let reviews = await Review.findAll({ where: { bookId: bookId } });
  await getUser(reviews);
  return reviews;
};

exports.getRatesAvgByBookId = async (bookId) => {
  let reviews = await Review.findAll({ where: { bookId: bookId } });
  if (!reviews.length) {
    return [{ promedio: 0 }];
  } else {
    let acum = 0;
    for (let i = 0; i < reviews.length; i++) {
      acum += reviews[i].rate;
    }
    return [{ promedio: Math.round(acum / reviews.length) }];
  }
};

exports.create = async (review) => {
  let userId = review.userId;
  let bookId = review.bookId;
  let reviews = await this.getByBookId(bookId); // GET ALL REVIEWS BY BOOK ID
  let userFound = checkUser(reviews, userId); // CHECK IF THAT USER HAVE A REVIEW
  let orders = await orderService.ordersByUser(userId); // GET ALL ORDERS BY USER ID
  let userBoughtBook = checkOrders(orders, bookId); // CHECKS IF THAT USER BOUGHT THE BOOK

  // IF THE USER DOESNT HAVE A REVIEW FOR THAT BOOK AND BOUGHT THE BOOK, CREATE THE REVIEW
  if (!userFound && userBoughtBook) {
    return Review.create(review);
  } else {
    throw Error(
      "Puedes registrar tu opinion solo una vez y/o haber comprado el libro"
    );
  }
};

// FUNCTION TO ADITIONAL INFORMATION

function checkUser(reviews, userId) {
  let userFound = false;
  for (let i = 0; i < reviews.length; i++) {
    let review = reviews[i].dataValues;
    if (review.userId === userId) {
      userFound = true;
    }
  }
  return userFound;
}

function checkOrders(orders, bookId) {
  let userBoughtBook = false;
  for (let i = 0; i < orders.length; i++) {
    let bookOrdersArray = orders[i].dataValues.book_orders;
    for (let j = 0; j < bookOrdersArray.length; j++) {
      let bookInOrder = bookOrdersArray[j].bookId;
      if (bookInOrder === bookId) {
        userBoughtBook = true;
      }
    }
  }
  return userBoughtBook;
}

async function getUser(reviewsArray) {
  for (let i = 0; i < reviewsArray.length; i++) {
    let userId = reviewsArray[i].userId;
    let user = await User.findByPk(userId, {
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "password",
          "salt",
          "id",
          "email",
          "lastname",
          "dni",
          "address",
          "isAdmin",
        ],
      },
    });
    reviewsArray[i].dataValues.user = user;
  }
}
