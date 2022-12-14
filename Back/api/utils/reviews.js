const reviewService = require("../services/reviewService");

const reviews = [
  {
    comment: "No es tan bueno",
    rate: 2,
    userId: 1,
    bookId: 2,
  },
  {
    comment: "Magnifico",
    rate: 5,
    userId: 2,
    bookId: 1,
  },
];

async function createReviews() {
  for (let i = 0; i < reviews.length; i++) {
    let review = reviews[i];
    await reviewService.create(review);
  }
  console.log("REVIEWS todo bien");
}

module.exports = createReviews;
