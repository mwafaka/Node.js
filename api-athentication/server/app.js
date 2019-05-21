const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//Connect to mongoose
mongoose.connect("mongodb://localhost:27017/APIAuthentication", {
  useNewUrlParser: true
});
//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
//Routes
app.use("/users", require("./routes/users"));

module.exports = app;
