var League = require('../models/league')
var GameController = require('../controllers/game')
var async = require("async")

module.exports.getLeague = (name) => {
    return League.find({ name: name }).exec();
}

module.exports.addLeague = (league) => {
    return league.save();
}

module.exports.getList = () => {
    return League.find().exec();
}

module.exports.addTeam = (name, teamId) => {
    return League
        .updateOne({ name: name }, { $push: { teams: teamId } })
}
module.exports.addGame = (name, gameId) => {
    return League
        .updateOne({ name: name }, { $push: { games: gameId } })
}

module.exports.addWeek = (name) => {
    return League.findOne({ name: name }).then(dados => {
        halfLen = dados.teams.length
        if (dados.week === halfLen - 2) {
            if (dados.half === 1) {
                return League.updateOne({ name: name }, { state: 0, week: 0, half: 0 })
            }
            else {
                return League.updateOne({ name: name }, { week: 0, half: 1 })
            }
        }
        else {
            return League
                .updateOne({ name: name }, { $inc: { week: +1 } })
        }
    })

}


module.exports.getAllGames = async (name) => {
    arra = []
    dd = 0
    return League.find({ name: name }).then(async dados => {
        dd = dados[0].games.length
        for (i = 0; i < dados[0].games.length; i++) {
            dados1 = await GameController.getGame(dados[0].games[i])
            arra.push(dados1[0])
        }
        return arra
    })
}


/*module.exports.getAllGames = async (name) => {
    arra = []
    dd = 0

    dados = await League.find({ name: name })

    dd = dados[0].games.length
    for (i = 0; i < dados[0].games.length; i++) {
        console.log(i)
        dados1 = await GameController.getGame(dados[0].games[i])
        arra.push(dados1[0])
    }
    return arra
}*/