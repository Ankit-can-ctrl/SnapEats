import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";

// Loads env variables in .env file into process.env
dotenv.config();
const port = process.env.PORT;

const app = express();

// middleware
// new version of body parser
//parse json data
app.use(express.json());
// parse urlencoded data
app.use(express.urlencoded({ extended: true }));
//cors() allows your frontend to make API calls to your backend without being blocked.
app.use(cors());

// connect db
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("APi is working fine!");
});

// global error handler for custom error handler model
app.use(globalErrorHandler);

app.listen(port, () => console.log("server started on port " + port + "!"));
