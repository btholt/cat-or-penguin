var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

  myPlatform = process.platform

  res.render('index', 
  { 
    title: "A Very Useful Website",
  }
  );
});

module.exports = router;
