import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import httpError from "../models/http-model.js";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const registerUser = async (req, res, next) => {
  try {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ error: errors.array().map((e) => e.msg)[0] });
    }

    const { name, email, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = await userModel.create({
      name,
      email,
      password,
    });

    const token = generateToken(newUser._id);

    res.status(201).json({
      success: true, // Make sure this is set to true for successful registration
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Registration failed. Please try again.",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ error: errors.array().map((e) => e.msg)[0] });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = generateToken(user._id);
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Login failed. Please try again.",
    });
  }
};

const getUserData = async (req, res) => {
  const { userId } = req.body;

  try {
    const userData = await userModel.findById(userId);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).send("Error occurred during fetching user data");
  }
};

export { registerUser, loginUser, getUserData };
