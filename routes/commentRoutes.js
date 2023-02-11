const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:
// ...

router.post("/:id/create", commentController.store);

module.exports = router;
