import express from "express";
import {
  registerUser,
  loginUser,
  getUserData,
} from "../controllers/userController.js";
import {
  validateUserRegistration,
  validateUserLogin,
  handleValidationErrors,
} from "../middleware/registerUserMiddleware.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", validateUserRegistration, registerUser);
userRouter.post("/login", validateUserLogin, loginUser);
userRouter.get("/userdata", auth, getUserData);

export default userRouter;
