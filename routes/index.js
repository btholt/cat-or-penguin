var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

  var returnVariable = "NoneFound";

  if (process.env.SECRET_KEY) {
    returnVariable = process.env.SECRET_KEY;
  }

  var inProduction = process.env.NODE_ENV || 'dev';

  res.render('index', 
  { 
    title: returnVariable,
    production: inProduction 
  }
  );
});

module.exports = router;
