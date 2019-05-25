const JWT = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../configuration");
signToken = user => {
  return JWT.sign(
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
    const { email, password } = req.value.body;

    // Check if there is a user with the same email
    let foundUser = await User.findOne({ "local.email": email });
    if (foundUser) {
      return res.status(403).json({ error: "Email is already in use" });
    }

    // Is there a Google account with the same email?
    foundUser = await User.findOne({
      $or: [{ "google.email": email }, { "facebook.email": email }]
    });
    if (foundUser) {
      // Let's merge them?
      foundUser.methods.push("local");
      foundUser.local = {
        email: email,
        password: password
      };
      await foundUser.save();
      // Generate the token
      const token = signToken(foundUser);
      // Respond with token
      res.cookie("access_token", token, {
        httpOnly: true
      });
      res.status(200).json({ success: true });
    }

    // Is there a Google account with the same email?
    // foundUser = await User.findOne({ "facebook.email": email });
    // if (foundUser) {
    //   // Let's merge them?
    //   foundUser.methods.push('local')
    //   foundUser.local = {
    //     email: email,
    //     password: password
    //   }
    //   await foundUser.save()
    //   // Generate the token
    //   const token = signToken(foundUser);
    //   // Respond with token
    //   res.status(200).json({ token });
    // }

    // Create a new user
    const newUser = new User({
      methods: ["local"],
      local: {
        email: email,
        password: password
      }
    });

    await newUser.save();

    // Generate the token
    const token = signToken(newUser);
    // Send a cookie containing JWT
    res.cookie("access_token", token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  },

  // signUp: async (req, res, next) => {
  //   console.log("userController.signUP() called");

  //   const { email, password } = req.value.body;
  //   //check if the email exist
  //   const foundUser = await User.findOne({ "local.email": email });
  //   if (foundUser) {
  //     res.status(403).json({ error: "Email is already exist " });
  //   }
  //   const newUser = new User({
  //     email,
  //     password
  //   });

  //   await newUser.save();
  //   // res.json({ user: "created" });
  //   const token = signToken(newUser);
  //   res.status(200).json({ token });
  // },

  signIn: async (req, res, next) => {
    const token = signToken(res.user);
    res.status(200).json({ token });
    // Generate token
    console.log("Success");
  },

  signOut: async (req, res, next) => {
    const token = signToken(res.user);
    res.status(200).json({ token });
    // Generate token
    console.log("Success");
  },
  googleOAuth: async (req, res, next) => {
    const token = signToken(req.user);
    res.status(200).json({ token });
  },

  facebookOAuth: async (req, res, next) => {
    console.log("Got here");
  },
  secret: async (req, res, next) => {
    console.log("get here");
    res.json({ secret: "resource" });
  }
};
