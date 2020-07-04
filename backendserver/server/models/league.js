const mongoose = require('mongoose')


var leagueSchema = new mongoose.Schema({
    name: {type:String, required: true},
    teams: [Array],
    round: {type:Number, required:true},

})

module.exports = mongoose.model('league', leagueSchema)