const { Article } = require("../models");
const { format } = require("date-fns");
async function allowedWriter(req, res, next) {
  if (req.user.roleCode >= 200 && req.user.roleCode < 300) {
    console.log(req.user.id);
    const articles = await Article.findAll({ where: { userId: req.user.id } });
    res.render("panel/admin", { articles, format });
  } else {
    next();
  }
}

module.exports = allowedWriter;
