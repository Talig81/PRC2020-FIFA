var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var express = require('express');
var router = express.Router();
var TeamsController = require('../controllers/pTeams')
var Team = require('../controllers/pTeams')

router.get('/personalTeam/:id',passport.authenticate('jwt', { session: false }),function (req, res) {
  console.log("aqui")
  Team.getTeamUser(id)
  .then(dados => {
    console.log("dados -> " + dados)
    res.jsonp(dados)
  })
  .catch(e => res.status(500).send(`Erro na listagem de jogadores: ${e}`))
  })

router.get('/addPlayer/:id',passport.authenticate('jwt', { session: false }),function (req, res) {
  
})

router.post('/addTeam',passport.authenticate('jwt', { session: false }),function (req, res){
console.log("cenas")
console.log(req.body.name)
console.log(req.body.userId)
console.log(req.body.players)
console.log(req.body.price)
console.log(req.body.platform)

const new_team = new Team ({
  name : req.body.name,
  userId : req.body.userId,
  players : req.body.players,
  price : req.body.price,
  platform : req.body.platform
})

TeamsController.addTeam(new_team)
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