const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");
const { validateAdmin } = require("../middlewares/auth");

//LISTAR ESTADOS
router.get("/", statusController.index);

// ADMIN ROUTES

//CREAR ESTADO
router.post("/create", validateAdmin, statusController.createStatus);

//ELIMINAR ESTADO
router.delete("/delete/:id", validateAdmin, statusController.deleteStatus);

module.exports = router;
