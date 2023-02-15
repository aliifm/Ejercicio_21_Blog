const { User } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

function show(req, res) {
  res.render("login");
}

function register(req, res) {
  res.render("register");
}

function registerPost(req, res) {
  res.send("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
}

function logout(req, res) {
  res.render("logout");
}

const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

// async function login(req, res) {
//   const user = await User.findOne({ where: { username: req.body.username } });
//   const isValidPassword = await bcrypt.compare(req.body.password, user.password);
//   console.log(isValidPassword);
// }

module.exports = {
  show,
  register,
  registerPost,
  logout,
  login,
};
