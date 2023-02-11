const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", adminController.index);

router.get("/admin/crear", adminController.create);

router.post("/admin/create", adminController.store);

router.get("/admin/:id/edit", adminController.edit);

router.post("/admin/:id/update", adminController.update);

router.get("/admin/:id/destroy", adminController.destroy);

module.exports = router;
