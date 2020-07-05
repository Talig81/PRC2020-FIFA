const mongoose = require('mongoose')


var gameSchema = new mongoose.Schema({
    leagueName: {type:String, required: true},
    team1: {type:String, required: true},
    team2: {type:String, required: true},
    goals1:{type:String, required: true},
    goals2: {type:String, required: true},
    idTeam1: {type:String, required: true},
    idTeam2: {type:String, required: true},
})

module.exports = mongoose.model('game', gameSchema)