import {Router} from "express";
import passport from "../middlewares/passport.js";
import validator from "./../middlewares/validator.js";
import emailExists from "../middlewares/emailExists.js";
import authController from "../controllers/authController.js";
import {signUpSchema, signInSchema} from "../validators/signsValidator.js";

const authRouter = Router();

const { signUp, signIn, loginWithToken } = authController;

authRouter.post("/signUp", validator(signUpSchema), emailExists, signUp);
authRouter.post("/signIn", validator(signInSchema), signIn);

authRouter.get("/token", passport.authenticate("jwt", { session: false }), loginWithToken);

export default authRouter;