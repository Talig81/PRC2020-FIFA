var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var express = require('express');
var router = express.Router();
var Teams = require('../controllers/pTeams')

router.get('/personalTeam',passport.authenticate('jwt', { session: false }),function (req, res) {
    res.status(200).jsonp({ neat: "neat" })
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
  switch(req.body.platform){
    case 'pc':
      console.log('pc')
    case 'xbox':
      console.log('xbox')
    case 'ps':
      console.log('ps')
  }
})

module.exports = router;