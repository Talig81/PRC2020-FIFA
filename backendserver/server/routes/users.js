var uuid4 = require('uuid')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var Players = require('../controllers/players')
var Gamecontroller = require('../controllers/game')

const privateKey = fs.readFileSync('./keys/privatekey.key', 'utf-8')

const { uploadI } = require('./../multer/mlt')

router.get('/game', function (req, res, next) {
  Gamecontroller.playGame("5f00a7ed4c81c9bdf5f28949", "5f0117bfd5ec3ecbeee9f694", "liga1").then(dados => {
    console.log("Jogo criado criada")
    res.status(200).jsonp(dados)
  }).catch(err => {
    res.status(500).jsonp(err)
  })

})

/* User Register. */
router.post('/register', function (req, res, next) {
  Users.getUser(req.body.email).then(dados => {
    if (dados === null) {
      req.body.id = uuid4()
      Users.addUser(req.body).then(v => {
        var dir = './uploads/' + v.id
        fs.mkdir(dir, function (error, cena) {
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

router.get('/teste', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.status(200).jsonp({ user: req.user });
});

router.post('/image', passport.authenticate('jwt', { session: false }), uploadI.single('image'), function (req, res) {
  res.status(200).jsonp({ neat: "neat" })
});

router.post('/addPlayer', passport.authenticate('jwt', { session: false }), function (req, res) {
  Users.addPlayer(req.body.playerName, req.user).then(dados => {
    res.status(200).jsonp(dados);
  }).catch(err => {
    res.status(500).jsonp(err);
  })
})

router.get('/myTeam', passport.authenticate('jwt', { session: false }), function (req, res) {
  var list = [];

  for (var i = 0, len = req.user.players.length; i < len; i++) {
    Players.getSimpleName(req.user.players[i]).then(dados => list.push.dados);
  }
  console.log("pqpqpqpqpqpqppq");
  res.status(200).jsonp(list);
})

module.exports = router;
