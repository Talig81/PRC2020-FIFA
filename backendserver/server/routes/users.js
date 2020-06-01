var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')

var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')


/* GET users listing. */
router.post('/register', function (req, res, next) {
  Users.getUser(req.body.email).then(dados => {
    if (dados === null) {
      req.body.id = uuid4()
      Users.addUser(req.body).then(v => {
        var dir = './uploads/' + v.id
        fs.mkdir(dir,function(error,cena){
        });
        
        res.status(200).jsonp(v);
      })
        .catch(err => {
          res.status(500).jsonp(err);
        })
    }
    else {
      res.status(401).jsonp({ status: "Email ja existente" })
    };
  })
})

module.exports = router;
