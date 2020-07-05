var express = require('express');
var router = express.Router();
var LeagueController = require('../controllers/league')
var League = require('../models/league')
var GameController = require('../controllers/game')
var passport = require('passport')
/* GET home page. */

router.get('/list', function (req, res, next) {
    LeagueController.getList()
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).send(`Erro na listagem de ligas: ${e}`))
});

/* Create a league. */
router.post('/create',/*passport.authenticate('jwt', { session: false }),*/function (req, res) {
    console.log(req.body.name)
    var datetime = new Date();
    console.log(datetime);
    const newLeague = new League({
        name: req.body.name,
        teams: [],
        round: 0,
        games: [],
        startDate: datetime.toDateString(),
        endDate: '',
        half: 0,
        week: 0,
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
        .catch(err => {
            console.log(err)
            res.status(500).jsonp(err)
        })
})

router.post('/participate/:league/:teamId',/*passport.authenticate('jwt', { session: false }),*/function (req, res) {
    console.log(req.params.league)
    console.log(req.params.teamId)
    LeagueController.addTeam(req.params.league, req.params.teamId)
        .then((dados) => {
            console.log("Equipa adcionada")
            res.status(201).jsonp(dados)
        })
        .catch(err => {
            console.log(err)
            res.status(500).jsonp(err)
        })
        .catch(err => {
            console.log(err)
            res.status(500).jsonp(err)
        })
})

router.post('/game/:league/:gameId',/*passport.authenticate('jwt', { session: false }),*/function (req, res) {
    console.log(req.params.league)
    console.log(req.params.gameId)
    LeagueController.addGame(req.params.league, req.params.teamId)
        .then((dados) => {
            console.log("Jogo adcionado")
            res.status(201).jsonp(dados)
        })
        .catch(err => {
            console.log(err)
            res.status(500).jsonp(err)
        })
        .catch(err => {
            console.log(err)
            res.status(500).jsonp(err)
        })
})
router.get('/stuff',/*passport.authenticate('jwt', { session: false }),*/function (req, res) {
    LeagueController.getAllGames("hard league").then(dados=>{
        console.log("CHEGUEIIII "+dados)
        res.status(200).jsonp(dados)
    }).catch(err => {
        console.log(err)
        res.status(500).jsonp(err)
    })
})

router.get('/week/:league',/*passport.authenticate('jwt', { session: false }),*/function (req, res) {
    LeagueController.getLeague("hard league")
        .then((dados) => {
            var i, j = 0
            var played = []
            var aux = []
            league = dados[0]
            week = dados[0].week
            teams = dados[0].teams
            games = dados[0].games
            teamsLen = dados[0].teams.length
            if (week === 0) {
                for (i = 0; i < teamsLen / 2; i++) {
                    GameController.playGame(teams[j], teams[j + 1], "hard league").then(dados2 => {
                        LeagueController.addGame("hard league", dados2).then(dadosLeag => {
                        })
                    })
                    j += 2
                }
                LeagueController.addWeek("hard league").then(dados3 => { console.log(dados3) })
            }
            else {
                for (i = 0; i < teamsLen - 1; i++) {
                    if (played.includes(teams[i])) continue
                    console.log("i -> " + i)
                    for (j = 0; j < teamsLen; j++) {
                        if (j === i) continue
                        console.log("j -> " + j)
                        if (played.includes(teams[j])) continue
                        flag = 0
                        for (ii = 0; ii < games.length; ii++) {
                            GameController.getGame(games[ii][0]).then(dados5 => {
                                if (dados5 != null) {
                                    auxiliar = dados5[0].idTeam1
                                    auxiliar2 = dados5[0].idTeam2
                                    console.log(auxiliar2 + " - " + teams[j])
                                    console.log(auxiliar + " - " + teams[i])
                                    if (auxiliar === teams[i] || auxiliar2 === teams[i]) {
                                        console.log("ja jogaram")
                                        if (auxiliar === teams[j] || auxiliar22 === teams[j]) {
                                            console.log("ja jogaram")
                                            flag = 1
                                        }
                                    }
                                }

                            })
                        }
                        if (flag === 0) {
                            GameController.playGame(teams[i], teams[j],"hard league").then()
                            played.push(teams[i])
                            played.push(teams[j])
                            break
                        }

                    }
                }
            }
            res.status(201).jsonp(dados)
        })
        .catch(err => {
            console.log(err)
            res.status(500).jsonp(err)
        })
})

router.get('/list/:name', function (req, res, next) {

    LeagueController.getLeague(req.params.name)
        .then(dados => res.jsonp(dados))
        .catch(e => res.status(500).send(`Erro na listagem de ligas: ${e}`))
});


module.exports = router;
