const express = require("express");
const router = express.Router();

router.get("/person", (req, res) => {
  res.send("you have requested person");
});

//Params object on the request object
router.get("/person/:name", (req, res) => {
  res.send(` you have requested person ${req.params.name}`);
});
module.exports = router;
