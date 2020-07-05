var express = require('express');
var router = express.Router();
var GameController = require('../controllers/game')
var Game= require('../models/game')
var passport = require('passport')

/* GET de todos os jogos */

router.get('/list/:id', function(req, res, next) {
  GameController.getGame
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de jogos: ${e}`))
});

/** A adição de um jogo está a ser feita do lado da liga */

// lista de jogos de uma liga
router.get('/lista/:name', function(req, res, next) {
      console.log(req.params.name)
      GameController.getGameOfLeague(req.params.name)
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).send(`Erro na listagem de jogos: ${e}`))
    });

    
module.exports = router;
