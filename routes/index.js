var express = require('express');
var router = express.Router();
const systemStatus = require("../utils").systemStatus;

/* GET home page. */
router.all('/', function(req, res, next) {
  res.render("index", { title: "Express", systemStatus });
});

module.exports = router;
