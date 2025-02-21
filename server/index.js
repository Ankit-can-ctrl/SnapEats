const express = require("express");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// new version of body parser
//parse json data
app.use(express.json());
// parse urlencoded data
app.use(express.urlencoded({ extended: true }));
//cors() allows your frontend to make API calls to your backend without being blocked.
app.use(cors());

app.get("/", (req, res) => {
  res.send("APi is working fine!");
});

app.listen(port, () => console.log("server started on port " + port + "!"));

//
// snapeating
//
