const { Status } = require("../models");

const status = [
  {
    name: "Confirmada",
  },
  {
    name: "Pendiente",
  },
  {
    name: "Rechazada",
  },
];

async function createStatus() {
  Status.bulkCreate(status).then(() => {
    console.log("STATUS todo bien");
  });
}

module.exports = createStatus;
