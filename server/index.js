import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

// Loads env variables in .env file into process.env
dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://snap-eats-frontend-two.vercel.app",
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// api endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API test route is working!" });
});

export default app;
