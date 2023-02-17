async function allowedEditor(req, res, next) {
  if (req.user.roleCode >= 300) {
    const articles = await Article.findAll();
    res.render("panel/admin", { articles, format });

    next();
  } else {
    res.send("Permission denied");
  }
}

module.exports = allowedEditor;
