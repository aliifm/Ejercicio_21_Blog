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

module.exports = {
  show,
  register,
  registerPost,
  logout,
};
