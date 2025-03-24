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

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://your-frontend-domain.vercel.app", // Add your Vercel frontend domain
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

//cors() allows your frontend to make API calls to your backend without being blocked.
app.use(cors(corsOptions));
// middleware
// new version of body parser
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

app.get("/", (req, res) => {
  res.send("APi is working fine!");
});

// global error handler for custom error handler model
app.use(globalErrorHandler);

app.listen(process.env.PORT, () =>
  console.log("server started on port " + port + "!")
);
