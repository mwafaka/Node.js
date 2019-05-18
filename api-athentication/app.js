const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//Connect to mongoose
mongoose.connect("mongodb://localhost/APIAuthentication", {
  useNewUrlParser: true
});
//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
//Routes
app.use("/users", require("./routes/users"));

//Start server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`server listening at ${port}`);
