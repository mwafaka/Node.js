const express = require("express");
const router = require("express-promise-router")();
const { validateBody, schemas } = require("../helpers/routeHelpers");
const UserController = require("../controllers/users");
const passport = require("passport");
const passportConf = require("../passport");

router
  .route("/signup")
  .post(validateBody(schemas.authSchema), UserController.signUp);

router
  .route("/signin")
  .post(
    passport.authenticate("local", { session: false }),
    UserController.signIn
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
  .post(passport.authenticate("googleToken", { session: false }));

module.exports = router;
