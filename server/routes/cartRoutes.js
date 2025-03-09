import express from "express";
import {
  addToCart,
  removeFromCart,
  getCartItems,
} from "../controllers/cartController.js";
import auth from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", auth, addToCart);
cartRouter.delete("/remove", auth, removeFromCart);
cartRouter.get("/getCart", auth, getCartItems);

export default cartRouter;
