var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var express = require('express');
var router = express.Router();
var TeamsController = require('../controllers/pTeams')
var Team = require('../models/pTeams')

router.get('/personalTeam/:id',function (req, res) {

  TeamsController.getTeamUser(req.params.id)
  .then(dados => {
    console.log("dados -> " + dados)
    res.jsonp(dados)
  })
  .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
  })

router.get('/personalTeam/players/:id/:name',function (req, res) {
    TeamsController.getTeamPlayers(req.params.id,req.params.name)
    .then(dados => {
      console.log("dados -> " + dados.name)
      res.jsonp(dados)
    })
    .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
})

router.get('/addPlayer/:id',passport.authenticate('jwt', { session: false }),function (req, res) {
  
})

router.post('/addTeam',passport.authenticate('jwt', { session: false }),function (req, res){
console.log(req.body.atk)

const newTeam = new Team ({ 
  name : req.body.name,
  userId : req.body.userId,
  players : req.body.players,
  price : req.body.price,
  platform : req.body.platform,
  atck: req.body.atck,
  defense:req.body.defense,
  points: 0,
  wins:0,
  defeats:0
})

TeamsController.addTeam(newTeam)
                .then((dados) => {
                    console.log("Equipa criada")
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

module.exports = router;