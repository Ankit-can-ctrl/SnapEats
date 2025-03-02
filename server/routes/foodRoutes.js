import express from "express";
import upload from "../middleware/upload.js";
import {
  addFood,
  listFoodItems,
  deleteFoodItem,
  updateFood,
} from "../controllers/foodController.js";
import addFoodMiddleware from "../middleware/addFoodMiddleware.js";

const foodRouter = express.Router();

// multer middleware will handle the image upload before passing control to addFood controller function
foodRouter.post("/add", upload.single("image"), addFoodMiddleware, addFood);
foodRouter.get("/list", listFoodItems);
foodRouter.delete("/remove", deleteFoodItem);
foodRouter.put("/update", updateFood);

export default foodRouter;
