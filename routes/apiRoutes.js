const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/articulos",
  checkJwt({ secret: "UnStringMuySecreto", algorithms: ["HS256"] }),
  apiController.index,
);
router.get("/articulos/:id", apiController.show);

module.exports = router;
