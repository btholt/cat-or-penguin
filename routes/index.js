var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

  var returnVariable = "NoneFound";

  if (process.env.SECRET_KEY) {
    returnVariable = process.env.SECRET_KEY;
  }

  res.render('index', 
  { 
    title: returnVariable,
  }
  );
});

module.exports = router;
