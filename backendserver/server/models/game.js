const mongoose = require('mongoose')


var gameSchema = new mongoose.Schema({
    leagueName: {type:String, required: true},
    home: {type:String, required: true},
    away: {type:String, required: true},
    winner:{type:String, required: true},
})

module.exports = mongoose.model('game', gameSchema)