import foodModel from "../models/food-model.js";
import httpError from "../models/http-model.js";
import fs from "fs";

// adding new food item
const addFood = async (req, res, next) => {
  try {
    const { name, desc, price, category } = req.body;
    const imageName = req.file.filename;

    const newFood = new foodModel({
      name,
      desc,
      image: imageName,
      price,
      category,
    });

    await newFood.save();
    res.status(200).json({ message: "Food added successfully" });
  } catch (error) {
    return next(
      new httpError(
        "Something went wrong while adding new item, please try again",
        500
      )
    );
  }
};

// get all food items
const listFoodItems = async (req, res, next) => {
  try {
    const foodItems = await foodModel.find({});
    res.status(200).json({ FoodList: foodItems });
  } catch (error) {
    return next(
      new httpError(
        "Something went wrong while fetching food items, please try again",
        500
      )
    );
  }
};

// delete a food item
const deleteFoodItem = async (req, res, next) => {
  // we are taking id from the body not the url therefore post request
  const foodItemId = req.body.id;
  try {
    const foodItem = await foodModel.findById(foodItemId);
    if (!foodItem) return next(new httpError("Food item not found!", 404));
    fs.unlink(`uploads/${foodItem.image}`, (err) => {
      if (err) return next(new httpError("Failed to delete image", 500));
    });
    await foodItem.deleteOne();
    res.status(200).json({ message: "Food item deleted successfully" });
  } catch (error) {
    return next(new httpError("Failed to delete food item", 500));
  }
};

export { addFood, listFoodItems, deleteFoodItem };
