const { PaymentMethod } = require("../models");

const payments = [
  {
    name: "VISA",
    logo: "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-17.png",
  },
  {
    name: "MasterCard",
    logo: "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-5.png",
  },
  {
    name: "Cash",
    logo: "https://www.vhv.rs/dpng/d/546-5464937_cash-payment-icon-cash-money-icon-png-transparent.png",
  },
  {
    name: "Paypal",
    logo: "https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-5.png",
  },
];

async function createPayments() {
  PaymentMethod.bulkCreate(payments).then(() => {
    console.log("PAYMENTS todo bien");
  });
}

module.exports = createPayments;
