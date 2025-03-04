import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import registerUserMiddleware from "../middleware/registerUserMiddleware.js";
import { validateRegister } from "../middleware/registerUserMiddleware.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateRegister,
  registerUserMiddleware,
  registerUser
);
userRouter.post("/login", loginUser);

export default userRouter;
