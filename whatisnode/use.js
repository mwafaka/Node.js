//********operation system *************** */
// const os = require('os')
// console.log('os platform:', os.platform())

////////****************use inxpect */
function convertArrayToObject(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}
const obj = convertArrayToObject([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"]
]);
console.log(obj);
////////////*****************express***********  */
// const express = require("express");
// const server = express();
// server.set("view engine", "ejs");
// server.get("/", (req, res) => {
//   res.render("index");
// });
// server.get("/about", (req, res) => {
//   res.render("about");
// });
// server.listen(3000, () => {
//   console.log("Express");
// });

//*************Web Server***************** */
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req, { depth: 0 });
//   res.write("Hello World\n");
//   res.end();
// });
// server.listen(3000, () => {
//   console.log("Server is running");
// });
// const path = require("path");
// const fs = require("fs");
// const files = [".bash_profile", ".npmrc"];
// files.forEach(file => {
//   try {
//     const filePath = path.resolve(process.env.HOME, file);
//     const data = fs.readFileSync(filePath);
//     console.log("File data is", data);
//   } catch (err) {
//     console.log("File not found");
//   }
// });

// Asynchronus Patterns
// const fs = require("fs");
// fs.readFile(__filename, function cb(err, data) {
//   console.log("File data is", data);
// });
// console.log("TEST");

// EventEmitter
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();
// setImmediate(() => {
//   myEmitter.emit("TEST_EVENT");
// });

// myEmitter.on("TEST_EVENT", () => {
//   console.log("TEST_EVENT was fired");
// });
// myEmitter.on("TEST_EVENT", () => {
//   console.log("TEST_EVENT was fired");
// });
// myEmitter.on("TEST_EVENT", () => {
//   console.log("TEST_EVENT was fired");
// });
// myEmitter.emit("TEST_EVENT");
