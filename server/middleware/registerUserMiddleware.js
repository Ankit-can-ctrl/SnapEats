import { body, validationResult } from "express-validator";

// Validation rules for user registration
export const validateUserRegistration = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .withMessage("Invalid email format"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

// Validation rules for login (Ignore empty `name` field)
export const validateUserLogin = [
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .withMessage("Invalid email format"),

  body("password").notEmpty().withMessage("Password is required"),
  body("name")
    .optional()
    .custom((value) => {
      if (value !== "" && typeof value !== "string") {
        throw new Error("Invalid name format");
      }
      return true;
    }),
];

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array().map((e) => e.msg)[0] });
  }
  next();
};
