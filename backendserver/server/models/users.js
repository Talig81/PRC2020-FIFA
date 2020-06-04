const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    // id e o numero de aluno e é obrigatorio dado que e uma rede social de estudantes
    id: {type:String, required:true},
    name: {type:String, required: true},
    password: {type:String, required: true},
    email: {type:String, required: true},
    bio: String,
    avatar:  String,
    fav_team: String,
})

module.exports = mongoose.model('users', userSchema)