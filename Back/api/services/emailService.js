const { transporter } = require("../config/mailer");
let handlebars = require("handlebars");
let fs = require("fs");

exports.sendRegisterEmail = (user) => {
  readHTMLFile(
    __dirname + "/../utils/emails/registerConfirmation.html",
    function (err, html) {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      let template = handlebars.compile(html);
      let replacements = {
        username: user.name,
      };
      let htmlToSend = template(replacements);
      let mailOptions = {
        from: '"Librando BookStore 📖" <librandostore@gmail.com>',
        to: user.email,
        subject: "Gracias por registrarte en Librando BookStore",
        html: htmlToSend,
      };
      transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log(error);
        }
      });
    }
  );
};

exports.sendCheckoutEmail = async (order) => {
  let fullOrder = order.dataValues;
  let user = fullOrder.user.dataValues;
  let bookOrders = fullOrder.book_orders;
  let booksInOrder = await orderBooksArrayGenerator(bookOrders);

  readHTMLFile(
    __dirname + "/../utils/emails/orderConfirmation.html",
    function (err, html) {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      let template = handlebars.compile(html);
      let replacements = {
        username: user.name,
        lastname: user.lastname,
        address: user.address,
        orderId: fullOrder.id,
        data: booksInOrder,
        totalPrice: order.total,
      };
      let htmlToSend = template(replacements);
      let mailOptions = {
        from: '"Librando BookStore 📖" <librandostore@gmail.com>',
        to: user.email,
        subject: "Gracias por su compra en Librando Bookstore",
        html: htmlToSend,
      };
      transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log(error);
        }
      });
    }
  );
};

let readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

let orderBooksArrayGenerator = async function (bookOrders) {
  let booksInOrder = [];
  for (let i = 0; i < bookOrders.length; i++) {
    let book = {
      titulo: bookOrders[i].dataValues.book.title,
      autor: bookOrders[i].dataValues.book.author,
      descripcion: bookOrders[i].dataValues.book.description,
      imagen: bookOrders[i].dataValues.book.front,
      precio: bookOrders[i].dataValues.book.price,
    };
    booksInOrder.push(book);
  }
  return booksInOrder;
};
