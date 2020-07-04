var League = require('../models/league')

module.exports.getLeague = (name) =>{
    return League.find({name: name}).exec();
}

module.exports.addLeague = (league) =>{
    return league.save();
}

module.exports.getList = () =>{
    return League.find().exec();
}