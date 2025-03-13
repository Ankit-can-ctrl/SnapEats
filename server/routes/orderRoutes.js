import express from "express";
import auth from "../middleware/auth.js";
import {
  placeOrder,
  verifyOrder,
  userOrders,
  allOrders,
  updateStatus,
} from "../controllers/orderController.js";
const orderRouter = express.Router();

orderRouter.post("/place", auth, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.get("/userorders", auth, userOrders);
orderRouter.get("/allorders", allOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
