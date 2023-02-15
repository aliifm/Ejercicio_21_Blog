const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const loginController = require("../controllers/loginController");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
router.get("/", pagesController.showHome);

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/about-us", (req, res) => {
  res.render("aboutUs");
});

// app.get("/welcome", function (req, res) {
//   if (req.isAuthenticated()) {
//     res.send(`Te damos la bienvenida, ${req.user.firstname}`);
//   } else {
//     res.redirect("/login");
//   }
// });

router.get("/register", loginController.register);

router.post("/register", loginController.registerPost);

router.get("/logout", loginController.logout);

router.get("/login", loginController.show);

router.get;

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/login",
  }),
);

module.exports = router;

// passport.authenticate("local", {
//   successRedirect: "/welcome",
//   failureRedirect: "/login",
// }),
