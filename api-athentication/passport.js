const passport = require("passport");
const Localstrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("./configuration/index");
const User = require("./models/user");

//json web token strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        //Find the user specifeid in token
        const user = await User.findById(payload.sub);
        //if user doesn't exists,handle it
        if (!user) {
          return done(null, false);
        }
        //ohterwise,return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
//localstrategy
passport.use(
  new Localstrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        //Find the user given the email
        const user = await User.findById({ email });
        //if not , handle it
        if (!user) {
          return done(null, false);
        }
        //Check if the password is correct
        const isMatch = await user.isValidPassword(password);
        //if not,handle it
        if (!isMatch) {
          return done(null, false);
        }
        //otherwise ,return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
