const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

//Create a module
const User = mongoose.model("user", userSchema);

//Export the model
module.exports = User;
