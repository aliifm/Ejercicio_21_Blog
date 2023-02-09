const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

router.get("/", pagesController.showHome);

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/about-us", (req, res) => {
  res.render("aboutUs");
});

module.exports = router;
