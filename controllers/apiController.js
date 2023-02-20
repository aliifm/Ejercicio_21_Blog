const { Article } = require("../models");
const { Op } = require("sequelize");
const { query } = require("express");

// Display a listing of the resource.
async function index(req, res) {
  const title = req.query.title;
  if (title) {
    const article = await Article.findAll({
      where: {
        title: {
          [Op.substring]: `${title}`,
        },
      },
    });
    return res.json(articles);
  }
  const articles = await Article.findAll();
  return res.json(articles);
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
