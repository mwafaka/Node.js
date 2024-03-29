const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Connect to mongoose
mongoose.connect("mongodb://localhost:3000/APIAuthentication", {
  useNewUrlParser: true
});

//use cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

//Routes
app.use("/users", require("./routes/users"));

module.exports = app;
