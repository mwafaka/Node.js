const express = require("express");
const router = require("express-promise-router")();
const { validateBody, schemas } = require("../helpers/routeHelpers");
const UsersController = require("../controllers/users");
const passport = require("passport");
const passportConf = require("../passport");
const passportJWT = passport.authenticate("jwt", { session: false });
router
  .route("/signup")
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router
  .route("/signin")
  .post(
    validateBody(schemas.authSchema),
    passport.authenticate("local", { session: false }),
    UsersController.signIn
  );
router.route("/dashboard").get(passportJWT, UsersController.dashboard);
router
  .route("/signout")
  .get(
    passport.authenticate("jwt", { session: false }),
    UsersController.signOut
  );

router
  .route("/secret")
  .get(
    validateBody(schemas.authSchema),
    passport.authenticate("jwt", { session: false }),
    UserController.secret
  );
router
  .route("/oauth/google")
  .post(
    passport.authenticate("googleToken", { session: false }),
    UserController.googleOAuth
  );

router
  .route("/oauth/facebook")
  .post(
    passport.authenticate("facebookToken", { session: false }),
    UserController.facebookOAuth
  );
module.exports = router;
