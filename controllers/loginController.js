const express = require("express");
const bcrypt = require("bcryptjs");
//const app = express();

function show(req, res) {
  res.render("login");
}

function register(req, res) {
  res.render("register");
}

async function registerPost(req, res) {
  const passwordParaHashear = req.body.password;
  const passwordHasheado = await bcrypt.hash(passwordParaHashear, 10);

  const nuevoUsuario = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: passwordHasheado,
  });
}

function logout(req, res) {
  res.render("logout");
}

module.exports = {
  show,
  register,
  registerPost,
  logout,
};
