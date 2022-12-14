const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "librandostore@gmail.com",
    pass: "hejvmzrtelmmuxqp",
  },
});

transporter.verify().then(() => {
  console.log("Listo para enviar emails");
});

module.exports = { transporter };
