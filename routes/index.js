var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

let inImgPath;

if (process.env.ANIMAL === "penguin") {
  console.log('ANIMAL: penguin');
  inImgPath = "/images/penguinflipper.png"
} else {
  console.log('ANIMAL: cat');
  inImgPath = "/images/catpaw.png";
}

router.get('/', function (req, res, next) {


  res.render('index', 
  { 
    title: "A Very Useful Website",
    imgPath: inImgPath
  }
  );
});

module.exports = router;
