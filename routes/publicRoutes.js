const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const isAuthenticated = require("../middlewares/isAuthenticated");

//

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

router.get("/register", authController.register);

router.post("/register", authController.registerPost);

router.get("/login", authController.show);

router.post("/login", authController.login);

router.get;

// router.post(
//   "/login",
//   ,
// );

module.exports = router;

// passport.authenticate("local", {
//   successRedirect: "/welcome",
//   failureRedirect: "/login",
// }),
