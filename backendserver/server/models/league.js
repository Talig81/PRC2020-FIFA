const mongoose = require('mongoose')


var leagueSchema = new mongoose.Schema({
    name: {type:String, required: true},
    teams: [Array],
    round: {type:Number},
    games: [Array],
    scoreTable: [Array],
    state : {type:Number, required:true}, // open or closed for inscription
    startDate :{type:String, required: true},
    endDate :{type:String},
})

module.exports = mongoose.model('league', leagueSchema)