import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import httpError from "../models/http-model.js";
import validator from "express-validator";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) return next(new httpError("User already exist", 400));

    // validating email

    const newUser = new userModel({
      name: name,
      email: email,
      password: password,
    });

    const user = await newUser.save();
    const token = generateToken(user._id);

    res.status(201).json({
      token: token,
    });
  } catch (err) {
    console.log(err);
    return next(new httpError("Something went wrong while registering.", 500));
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return next(new httpError("User does not exist", 400));
    }

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.status(200).json({
        message: "User logged in successfully",
        token: token,
      });
    } else {
      return next(new httpError("Invalid password", 401));
    }
  } catch (err) {
    console.log(err);
    return next(new httpError("Something went wrong while logging in.", 500));
  }
};

export { registerUser, loginUser };
