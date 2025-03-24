import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// Loads env variables in .env file into process.env
dotenv.config();
const port = process.env.PORT;

const app = express();

// CORS configuration - PUT THIS BEFORE ANY ROUTES
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://snap-eats-8z7i.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect db
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("APi is working fine!");
});

// global error handler for custom error handler model
app.use(globalErrorHandler);

app.listen(process.env.PORT, () =>
  console.log("server started on port " + port + "!")
);
