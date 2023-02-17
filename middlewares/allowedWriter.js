async function allowedWriter(req, res, next) {
  if (req.user.roleCode >= 200 && item.userId === user.id) {
    const articles = await Article.findByPk();
    res.render("panel/admin", { articles, format });

    next();
  } else {
    res.send("Permission denied");
  }
}

module.exports = allowedWriter;
