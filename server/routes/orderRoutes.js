import express from "express";
import auth from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";
const orderRouter = express.Router();

orderRouter.post("/place", auth, placeOrder);

export default orderRouter;
