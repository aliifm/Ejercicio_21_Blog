const { format, formatDistance } = require("date-fns");
const { Article, Comment, User } = require("../models");
const formidable = require("formidable");
// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();
  res.render("panel/admin", { articles });
}

// Display the specified resource.
async function show(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({
    where: { id: articleId },
  });
  res.render("article", { article });
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("panel/create");
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const { userId, title, content } = fields;

    const article = await Article.create({
      userId: userId,
      title: title,
      content: content,
      image: files.image.newFilename,
    });
    article.save();
    res.redirect("/");
  });

  //  const { title, content, image } = req.body;
  //  const article = await Article.create({ title: title, content: content, image: image });
  //article.save();
  //res.redirect("/panel/admin");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({
    where: { id: articleId },
  });
  res.render("panel/edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  const articleId = req.params.id;
  const { title, content, image } = req.body;
  await Article.update(
    { title: title, content: content, image: image },
    {
      where: {
        id: articleId,
      },
    },
  );
  res.redirect("/panel/admin");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const articleId = req.params.id;
  await Article.destroy({
    where: {
      id: articleId,
    },
    force: true,
  });

  res.redirect("/panel/admin");
}

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
