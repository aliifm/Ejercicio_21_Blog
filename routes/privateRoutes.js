const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const notAllowedReader = require("../middlewares/notAllowedReader");
const allowedWriter = require("../middlewares/allowedWriter");

// Rutas relacionadas al panel de control (Admin):
// ...
router.use(isAuthenticated);
router.get("/admin", notAllowedReader, allowedWriter, adminController.index);

router.get("/admin/crear", adminController.create);

router.post("/admin/create", adminController.store);

router.get("/admin/:id/edit", adminController.edit);

router.post("/admin/:id/update", adminController.update);

router.get("/admin/:id/destroy", adminController.destroy);

router.get("/logout", authController.logout);

module.exports = router;
