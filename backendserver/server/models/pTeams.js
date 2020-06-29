const mongoose = require('mongoose')


var teamSchema = new mongoose.Schema({
    id: {type:String, required:true},
    name: {type:String, required: true},
    userId: {type: String, required: true},
    players: [Array],
    price: {type:Number, required:true},
    platform : {type:String, required:true},
})

module.exports = mongoose.model('pTeam', teamSchema)
