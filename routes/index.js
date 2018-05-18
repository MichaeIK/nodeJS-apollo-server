var express = require('express');
var router = express.Router();
const os = require('os');
const systemStatus = require("../utils").systemStatus;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(systemStatus);
  res.render("index", { title: "Express", systemStatus });
});

module.exports = router;
