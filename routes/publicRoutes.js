const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about-us", (req, res) => {
  res.render("aboutUs");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
