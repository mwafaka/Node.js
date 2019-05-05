const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").MongoURI;
//Ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//Bodyparser
app.use(express.urlencoded({ urlencoded: false }));

//Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));
//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
