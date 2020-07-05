var League = require('../models/league')
var GameController = require('../controllers/game')

module.exports.getLeague = (name) =>{
    return League.find({name: name}).exec();
}

module.exports.addLeague = (league) =>{
    return league.save();
}

module.exports.getList = () =>{
    return League.find().exec();
}

module.exports.addTeam = (name, teamId) => {
    return League
        .updateOne({name: name}, {$push: {teams: teamId}})
}
module.exports.addGame = (name, gameId) => {
    return League
        .updateOne({name: name}, {$push: {games: gameId}})
}

module.exports.addWeek = (name) => {
    return League
        .updateOne({name: name}, {$inc: {week: +1}})
}

module.exports.getAllGames = (name) => {
    arra=[]
    dd = 0
    return League.find({name: name}).then(dados=>{
        dd= dados[0].games.length
        for(i = 0; i<dados[0].games.length;i++){
            GameController.getGame(dados[0].games[i]).then(dados1=>{
                arra.push(dados1[0])
            })
        }
        var timeout = setInterval(function() {
            if(arra.length == dados[0].games.length) {
                console.log("welele")
                return arra
            }
        }, 100);
    })
   
    
}
