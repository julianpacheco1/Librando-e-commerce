const express = require("express");
const router = express.Router();
const paymentMethodsController = require("../controllers/paymentMethodsController");
const { validateAdmin } = require("../middlewares/auth");

//LISTAR MÉTODOS DE PAGO
router.get("/", paymentMethodsController.index);

// ADMIN ROUTES

//CREAR MÉTODO DE PAGO
router.post("/create", validateAdmin, paymentMethodsController.createPM);

//ELIMINAR MÉTODO DE PAGO
router.delete("/delete/:id", validateAdmin, paymentMethodsController.deletePM);

module.exports = router;
