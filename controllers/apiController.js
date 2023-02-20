const { Article } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Display the specified resource.
async function show(req, res) {
  const userId = req.params.id;
  const articles = await Article.findAll({
    where: {
      userId: userId,
    },
  });

  res.json(articles);
}














module.exports = {
  index,
  show,
};
