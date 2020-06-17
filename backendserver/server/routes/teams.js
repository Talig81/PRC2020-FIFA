var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var express = require('express');
var router = express.Router();


router.get('/personalTeam',passport.authenticate('jwt', { session: false }),function (req, res) {
    res.status(200).jsonp({ neat: "neat" })
  })

router.get('addPlayer/:id',passport.authenticate('jwt', { session: false }),function (req, res) {
  
})