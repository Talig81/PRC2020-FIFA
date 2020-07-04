const mongoose = require('mongoose')


var leagueSchema = new mongoose.Schema({
    name: {type:String, required: true},
    teams: [Array],
    round: {type:Number, required:true},
    games: [Array],
    state : {type:Number, required:true}, // open or closed for inscription
})

module.exports = mongoose.model('league', leagueSchema)