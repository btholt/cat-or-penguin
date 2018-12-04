var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {
  res.render('index', 
  { 
    title: process.env.SECRET_KEY,
  }
  );
});

module.exports = router;
