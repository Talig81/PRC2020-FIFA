var PTeams = require('../models/pTeams')

module.exports.getTeamUser = (userId) =>{
    return PTeams.find({userId: userId}).exec();
}

module.exports.addTeam = (team) =>{
    return team.save();
}

module.exports.addPlayer = (player,teamid) => {
    
}