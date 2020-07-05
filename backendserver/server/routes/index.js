
var express = require('express');
var router = express.Router();
var Gamecontroller = require('../controllers/game')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/root',function(req, res, next) {
  res.render('index',{title: "ola" })
  Gamecontroller.playGame("5efa17d4db9b622ddce2f50d","5efe5560dcfb7a001014cd7d")
  
})

module.exports = router;