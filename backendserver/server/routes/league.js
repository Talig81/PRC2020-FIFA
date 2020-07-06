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

router.get('/week/:league',/*passport.authenticate('jwt', { session: false }),*/function (req, res) {
    league1 = req.params.league
    console.log(league1)
    LeagueController.getLeague(league1)
        .then((dados) => {
            var i=0
            var flag = 0
            var j = 0
            var played = []
            league = dados[0]
            half = dados[0].half
            week = dados[0].week
            teams = dados[0].teams
            games = dados[0].games
            teamsLen = dados[0].teams.length
            if (week === 0) {
                for (i = 0; i < teamsLen / 2; i++) {
                    GameController.playGame(teams[j], teams[j + 1], league1).then(dados2 => {
                        LeagueController.addGame(league1, dados2).then(dadosLeag => {
                        })
                    })
                    j += 2
                }
                LeagueController.addWeek(league1).then(dados3 => {})
                res.status(201).jsonp("week started")
            }
            else {
                LeagueController.getAllGames(league1).then(dados4 =>{
                    for(i=0; i<teamsLen;i++){
                        if(played.includes(i)) continue
                        for(j=0;j<teamsLen;j++){
                            if(j===i) continue
                            if(played.includes(j)) continue
                            flag = 0
                            for(ii = 0; ii < dados4.length;ii++){
                                if(teams[i][0] === dados4[ii].idTeam1 || teams[i][0] === dados4[ii].idTeam2){
                                    if(teams[j][0] === dados4[ii].idTeam1 || teams[j][0] === dados4[ii].idTeam2){
                                        console.log("ja jogaram")
                                        flag += 1
                                    }
                                }
                            }
                            if(flag===1 && half === 0) continue
                            if(flag===2 && half === 1) continue
                            else{
                                GameController.playGame(teams[i],teams[j],league1).then(dados6=>{
                                    LeagueController.addGame(league1, dados6).then(dadosLeag => {
                                    })
                                })
                                played.push(i)
                                played.push(j)
                                break
                            }
                        }
                    }
                    LeagueController.addWeek(league1)
                    res.status(201).jsonp("week had started")
                })
            }
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
