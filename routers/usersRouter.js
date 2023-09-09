// routers/usersRouter.js
import {Router} from "express";
import usersController from "../controllers/usersController.js";
import emailExists from "../middlewares/emailExists.js";
import validator from "../middlewares/validator.js";
import {signUpSchema} from "../validators/signUpValidator.js";

const usersRouter = Router();

// Ruta para obtener todos los usuarios
usersRouter.get("/", usersController.getAllUsers);

// Ruta para obtener un usuario por su ID
usersRouter.get("/:id", usersController.getUserById);

// Ruta para crear un nuevo usuario
usersRouter.post('/', emailExists, validator(signUpSchema), usersController.createUser); // Validator schema & emailExists comprobation

// Ruta para actualizar un usuario por su ID
usersRouter.put("/:id", validator(signUpSchema), usersController.updateUser); // Schema validator

// Ruta para eliminar un usuario por su ID
usersRouter.delete("/:id", usersController.deleteUserById);

export default usersRouter;