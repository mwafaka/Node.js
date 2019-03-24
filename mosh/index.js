const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const Joi = require("joi");
const logger = require("./logger");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const courses = require("./routes/courses");
const homepage = require("./routes/homepage");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views"); //default
////////
// console.log(`Node_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`);
// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
//   startupDebugger("Morgan enabled...");
// }
//Db work...
// dbDebugger("Connected to the database... ");
////////Configuration//////////////
// console.log("Application Name: " + config.get("name"));
// console.log("Mail Server: " + config.get("mail.host"));
// console.log("Mail Password: " + config.get("mail.password"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", homepage);
app.use(function(req, res, next) {
  console.log("Lodding...");
  next(logger);
});

app.listen(3000, () => {
  console.log(`listening on port ${port}`);
});
