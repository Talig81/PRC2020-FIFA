const mongoose = require('mongoose')


var teamSchema = new mongoose.Schema({
    name: {type:String, required: true},
    userId: {type: String, required: true},
    players: [Array],
    price: {type:Number, required:true},
    platform : {type:String, required:true},
    atck : {type:Number, required:true},
    defense : {type:Number, required:true}
})

module.exports = mongoose.model('pTeam', teamSchema)
