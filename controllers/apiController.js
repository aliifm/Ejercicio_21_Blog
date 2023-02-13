const { Article } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Display the specified resource.
async function show(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({
    where: {
      id: articleId,
    },
  });

  res.json(article);
}

module.exports = {
  index,
  show,
};
