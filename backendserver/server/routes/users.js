var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')

const privateKey = fs.readFileSync('./keys/privatekey.key', 'utf-8')

const { uploadI } = require('./../multer/mlt')

/* User Register. */
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

/* User Login */
router.post('/login', passport.authenticate('local', { session: false }), function (req, res) {
  jwt.sign({ user: req.user }, privateKey, { expiresIn: '2h', algorithm: 'RS256' }, (err, tokengo) => {
    res.status(200).jsonp({ user: req.user, token: tokengo });
  })
});

router.get('/teste',passport.authenticate('jwt', { session: false }), function (req, res){
  res.status(200).jsonp({ user: req.user });
});

router.post('/image', passport.authenticate('jwt', { session: false }), uploadI.single('image'), function (req, res) {
  res.status(200).jsonp({ neat: "neat" })
})


module.exports = router;
