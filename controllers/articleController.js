const { Article, Comment, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Display the specified resource.
async function show(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({
    where: { id: articleId },
    include: [{ model: Comment }, { model: User }],
  });
  //res.send(article);
  res.render("article", { article });
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
