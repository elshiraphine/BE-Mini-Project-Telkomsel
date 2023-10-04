//require controllers
const indexController = require("../controllers/indexController");
const express = require("express");
const router = express.Router();

router.post("/Count", indexController.register);

module.exports = router;
