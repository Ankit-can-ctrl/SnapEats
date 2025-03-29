import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API test route is working!" });
});

export default app;
