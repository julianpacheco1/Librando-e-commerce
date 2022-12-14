const express = require("express");
const router = express.Router();
const { validateAuth, validateAdmin } = require("../middlewares/auth");
const userController = require("../controllers/usersController");

//RUTA PARA REGISTRO
router.post("/register", userController.createUser);

//RUTA PARA LOGIN
router.post("/login", userController.loginUser);

//RUTA PARA LOGOUT
router.get("/logout", userController.logoutUser);

//RUTA PARA EDITAR UN USUARIO
router.put("/:id", userController.editUser);

//RUTA PARA TRAER UN USUARIO POR ID
router.get("/get/:id", validateAuth, userController.getUserById);

//RUTA PARA DEVOLVER USUARIO LOGGEADO (SI LO HAY)
router.get("/me", validateAuth, userController.getMe);

// ADMIN ROUTES

//RUTA PARA PROMOVER UN ADMINISTRADOR...
router.put("/admin/:id", validateAdmin, userController.promoveAdmin);

//RUTA PARA ELIMINAR UN USUARIO...
router.delete("/:id", validateAdmin, userController.deleteUser);

//RUTA GET ALL USERS
router.get("/", validateAdmin, userController.getUsers);

module.exports = router;
