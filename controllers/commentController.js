const { Comment, User } = require("../models");

// Store a newly created resource in storage.
async function store(req, res) {
  const articleId = req.params.id;
  const { comment } = req.body;
  const userId = req.user.id; // obtén el ID del usuario actualmente autenticado
  const user = await User.findOne({ where: { id: userId } }); // busca el usuario en la base de datos
  const data = await Comment.create({
    content: comment, // incluye el nombre del usuario en el comentario
    userId: userId,
    articleId: articleId,
  });

 
  data.save();

  req.flash("message", "Comment Added Successfully");
  res.redirect(`/articulos/${articleId}`);
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
/*   const { id } = req.params;
  await Comment.destroy({ where: { id: id }, force: false }); // elimina el comentario de forma "paranoid"
  req.flash("message", "Comment deleted successfully");
  res.redirect(`/articulos/${articleId}`); */
}

// Otros handlers...
// ...

module.exports = {
  store,
  edit,
  update,
  destroy,
};
