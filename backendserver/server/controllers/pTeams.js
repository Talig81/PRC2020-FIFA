var PTeams = require('../models/pTeams')

module.exports.getTeamUser = (userId) =>{
    return PTeams.find({userId: userId}).exec();
}

module.exports.getById = (id) =>{
    return PTeams.find({_id: id}).exec();
}

module.exports.getTeamPlayers = (userId,teamName) =>{
    return PTeams.find({userId: userId,name:teamName}).exec();
}

module.exports.addTeam = (team) =>{
    return team.save();
}

module.exports.addPlayer = (player,teamid) => {
    
}

module.exports.getAllTeams = () =>{
    return PTeams.find().exec();
}