var express = require('express');
var router = express.Router();
var LeagueController = require('../controllers/league')
var League = require('../models/league')
var passport = require('passport')
/* GET home page. */

router.get('/list', function(req, res, next) {
  LeagueController.getList()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de ligas: ${e}`))
});

/* Create a league. */
router.post('/create',/*passport.authenticate('jwt', { session: false }),*/function (req, res){
    console.log(req.body.name)
    var datetime = new Date();
    console.log(datetime);
    const newLeague = new League ({ 
      name : req.body.name,
      teams : [],
      round : 0,
      games : [],
      startDate : datetime.toDateString(),
      endDate : '',
      half: 0,
      week : 0,
      state: 1, // 1 aberto e 0 fechado
    })
    
    LeagueController.addLeague(newLeague)
                    .then((dados) => {
                        console.log("Liga criada")
                        res.status(201).jsonp(dados)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).jsonp(err)
                    })
            .catch(err =>{
                console.log(err)
                res.status(500).jsonp(err)
    })
    })

router.post('/participate/:league/:teamId',/*passport.authenticate('jwt', { session: false }),*/function (req, res){
    console.log(req.params.league)
    console.log(req.params.teamId)
    LeagueController.addTeam(req.params.league,req.params.teamId)
                      .then((dados) => {
                          console.log("Equipa adcionada")
                          res.status(201).jsonp(dados)
                      })
                      .catch(err => {
                          console.log(err)
                          res.status(500).jsonp(err)
                      })
              .catch(err =>{
                  console.log(err)
                  res.status(500).jsonp(err)
      })
      })

router.post('/game/:league/:gameId',/*passport.authenticate('jwt', { session: false }),*/function (req, res){
        console.log(req.params.league)
        console.log(req.params.gameId)    
        LeagueController.addGame(req.params.league,req.params.teamId)
                          .then((dados) => {
                              console.log("Jogo adcionado")
                              res.status(201).jsonp(dados)
                          })
                          .catch(err => {
                              console.log(err)
                              res.status(500).jsonp(err)
                          })
                  .catch(err =>{
                      console.log(err)
                      res.status(500).jsonp(err)
          })
          })

router.get('/week/:league',/*passport.authenticate('jwt', { session: false }),*/function (req, res){
            console.log(req.params.league)
            let games_id
            let games
            LeagueController.getLeague(req.params.league)
                              .then((dados) => {
                                  console.log("Get da liga")
                                  console.log(dados[0])
                                  res.status(201).jsonp(dados)
                              })
                              .catch(err => {
                                  console.log(err)
                                  res.status(500).jsonp(err)
                              })
})

router.get('/list/:name', function(req, res, next) {
      LeagueController.getLeague(req.params.name)
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).send(`Erro na listagem de ligas: ${e}`))
    });

module.exports = router;
