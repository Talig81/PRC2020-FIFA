var express = require('express');
var router = express.Router();
var Players = require('../controllers/players')
/* GET home page. */

router.get('/works', function(req, res, next) {
    console.log("teste");
    res.jsonp("works")
  });

router.get('/', function(req, res, next) {
  console.log("teste");
  Players.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

module.exports = router;