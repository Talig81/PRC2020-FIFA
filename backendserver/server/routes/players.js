var express = require('express');
var router = express.Router();
var Players = require('../controllers/players')

/* GET home page. */

router.get('/teste', function(req, res, next) {
  console.log("teste");
  Players.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
});

router.get('/simple', function(req, res, next) {
  console.log("teste");
  Players.getSimple()
    .then(dados => {
      console.log("dados -> " + dados)
      res.jsonp(dados)
    })
    .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
});

router.get('/card/:name', function(req, res, next) {
  console.log(req.params.name)
  console.log("teste");
  Players.getCardInfo(req.params.name)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
});

router.get('/complete/:name', function(req, res, next) {
  console.log(req.params.name)
  console.log("teste");
  Players.getCompleteInfo(req.params.name)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
});

router.get('/search/:name/:platform', function(req, res, next) {
  switch(req.params.platform){
    case 'PC - Origin':
      Players.Searchpc(req.params.name)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
      break;
    case 'Xbox':
      Players.Searchxbox(req.params.name)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
      break;
    case 'Playstation':
      Players.Searchps(req.params.name)
      .then(dados => res.jsonp(dados))
      .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
  };
  })
module.exports = router;
