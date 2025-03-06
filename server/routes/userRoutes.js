import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import {
  validateUserRegistration,
  validateUserLogin,
  handleValidationErrors,
} from "../middleware/registerUserMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", validateUserRegistration, registerUser);
userRouter.post("/login", validateUserLogin, loginUser);

export default userRouter;
