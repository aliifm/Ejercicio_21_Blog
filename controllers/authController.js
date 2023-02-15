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

function registerPost(req, res) {
  // const user =
}

// const { userId, title, content } = fields;

// const article = await Article.create({
//   userId: userId,
//   title: title,
//   content: content,
//   image: files.image.newFilename,
// });

// article.save();
// res.redirect("/");

function logout(req, res) {
  req.logout(() => {
    res.redirect("/");
  });
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
