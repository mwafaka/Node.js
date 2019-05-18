const jwt = require("jsonwebtoken");
const User = require("../models/user");

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
    jwt.sign(
      {
        iss: "mwafak",
        sub: newUser.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
      },
      "mwafak"
    );
  },

  signIn: async (req, res, next) => {
    console.log("userController.signIn() called");
  },

  secret: async (req, res, next) => {
    console.log("userController.secret() called");
  }
};
