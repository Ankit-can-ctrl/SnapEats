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

const allowedOrigins = [
  "http://localhost:5173",
  "https://snap-eats-frontend-two.vercel.app",
];

// Add your production domain if it's different
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

//cors() allows your frontend to make API calls to your backend without being blocked.
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies if needed
  })
);

//parse json data
app.use(express.json());
// parse urlencoded data
app.use(express.urlencoded({ extended: true }));

// connect db
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});
app.get("/", (req, res) => {
  res.send("APi is working fine!");
});

// global error handler for custom error handler model
app.use(globalErrorHandler);

// At the end of your index.js file, replace the app.listen with:
if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT, () =>
    console.log("server started on port " + port + "!")
  );
}

// Export the Express app for Vercel
export default app;
