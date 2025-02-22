import httpError from "../models/http-model.js";
const addFoodMiddleware = (req, res, next) => {
  const { name, desc, price, category } = req.body;

  if (!req.file) return next(new httpError("Image is required!", 400));
  if (!name || !desc || !price || !category)
    return next(new httpError("All fields are required!", 400));
  if (isNaN(price) || price <= 0)
    return next(new httpError("Price must be a positive number!", 400));

  next();
};

export default addFoodMiddleware;
