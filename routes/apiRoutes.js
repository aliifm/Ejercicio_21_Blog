const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/articulos", apiController.index);
router.get("/articulos/:id", apiController.show);

module.exports = router;
