var PTeams = require('../models/pTeams')

module.exports.getTeamUser = id =>{
    return PTeams.find({userId: id}).exec();
}

module.exports.addTeam = team =>{
    return PTeams
        .create(team).exec()
}