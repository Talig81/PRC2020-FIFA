const mongoose = require('mongoose')


var teamSchema = new mongoose.Schema({
    id: {type:String, required:true},
    name: {type:String, required: true},
    userId: {type: String, required: true},
    players: [Array],



})

module.exports = mongoose.model('pTeam', teamSchema)
