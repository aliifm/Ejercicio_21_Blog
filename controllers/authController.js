const { User } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const article = require("../models/Article");

function show(req, res) {
  res.render("login");
}

function register(req, res) {
  res.render("register");
}

async function registerPost(req, res) {
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: await bcrypt.hash(req.body.password, 8),
  });

  user.save();
  res.redirect("/");
}

function logout(req, res) {
  req.logout(() => {
    res.redirect("/");
  });
}

const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  //failureFlash: true
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
