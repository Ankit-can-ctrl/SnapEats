import express from "express";
import auth from "../middleware/auth.js";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";
const orderRouter = express.Router();

orderRouter.post("/place", auth, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
