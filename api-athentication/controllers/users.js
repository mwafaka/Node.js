const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../configuration/index");
signToken = user => {
  return jwt.sign(
    {
      iss: "mwafak",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    JWT_SECRET
  );
};

module.exports = {
  signUp: async (req, res, next) => {
    console.log("userController.signUP() called");

    const { email, password } = req.value.body;
    //check if the email exist
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(403).send({ error: "Email is already exist " });
    }
    const newUser = new User({
      email,
      password
    });

    await newUser.save();
    // res.json({ user: "created" });
    const token = signToken(newUser);
    res.status(200).json({ token });
  },

  signIn: async (req, res, next) => {
    console.log("");
    const token = signToken(res.user);
    res.status(200).json({ token });
    // Generate token
    console.log("Success");
  },

  secret: async (req, res, next) => {
    console.log("get here");
    res.json({ secret: "resource" });
  }
};
