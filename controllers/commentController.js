const { Comment } = require("../models");

// Store a newly created resource in storage.
async function store(req, res) {
  const articleId = req.params.id;
  const { comment } = req.body;
  const data = await Comment.create({
    content: comment,
    userId: Math.floor(Math.random() * 11),
    articleId: articleId,
  });
  data.save();
  res.redirect(`/articulos/${articleId}`);
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  store,
  edit,
  update,
  destroy,
};
