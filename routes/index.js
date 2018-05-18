var express = require('express');
var router = express.Router();
const os = require('os');
const data = require('../utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(data)
  res.render("index", { title: "Express", data });
});

module.exports = router;
