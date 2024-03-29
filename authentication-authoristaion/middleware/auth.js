const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send("Access deneid.No token provided.");
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};
