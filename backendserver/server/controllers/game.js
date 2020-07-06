var Game = require("../models/game")
var Pteams = require("../models/pTeams")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

module.exports.playGame = (team1, team2, leaguename) => {
    console.log(team2[0])
    return Pteams.find({
        '_id': {
            $in: [
                team1,
                team2
            ]
        }
    }).then((t1) => {
        t1A = parseInt(t1[0].atck)
        t1D = parseInt(t1[0].defense)
        t2A = parseInt(t1[1].atck)
        t2D = parseInt(t1[1].defense)
        flag1 = getRndInteger(0,2)
        flag2 = getRndInteger(0,2)
        flag3 = getRndInteger(0,2)
        flag4 = getRndInteger(0,2)
        if(flag1){
            percent = getRndInteger(1,5)
            t1A = t1A + (t1A * percent * 0.01)
        }
        else{
            percent = getRndInteger(1,5)
            t1A = t1A - (t1A * percent * 0.01)
        }
        if(flag2){
            percent = getRndInteger(1,5)
            t1D = t1D + (t1D * percent * 0.01)
        }
        else{
            percent = getRndInteger(1,5)
            t1D = t1D - (t1D * percent * 0.01)
        }
        if(flag3){
            percent = getRndInteger(1,5)
            t2A = t2A + (t2A * percent * 0.01)
        }
        else{
            percent = getRndInteger(1,5)
            t2A = t2A - (t2A * percent * 0.01)
        }
        if(flag4){
            percent = getRndInteger(1,5)
            t2D = t2D + (t2D * percent * 0.01)
        }
        else{
            percent = getRndInteger(1,5)
            t2D = t2D - (t2D * percent * 0.01)
        }
        if(t2D > t1A){
            goals1=0
        }
        else{
            diff = t1A - t2D
            if(diff > 20){
                goals1 = 4
            }
            else if(diff > 15){
                goals1 = 3
            }
            else if(diff > 10){
                goals1 = 2
            }
            else if(diff > 5){
                goals1 = 1
            }
            else{
                goals1 = 0
            }
        }
        if(t1D > t2A){
            goals2=0
        }
        else{
            diff = t2A - t1D
            if(diff > 20){
                goals2 = 4
            }
            else if(diff > 15){
                goals2 = 3
            }
            else if(diff > 10){
                goals2 = 2
            }
            else if(diff > 5){
                goals2 = 1
            }
            else{
                goals2 = 0
            }
        }
        const newGame = new Game({
            leagueName: leaguename,
            team1: t1[0].name,
            team2: t1[1].name,
            goals1: goals1,
            goals2: goals2,
            idTeam1: team1,
            idTeam2: team2,
        })
        return newGame.save()
    })
}

module.exports.getGame = (id) =>{
    return Game.find({_id: id}).exec();
}

module.exports.getGameOfLeague = (league) =>{
    return Game.find({leagueName: league}).exec();
}