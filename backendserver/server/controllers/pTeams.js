var PTeams = require('../models/pTeams')

module.exports.getTeam = id =>{
    return PTeams.findOne({id: id}).exec();
}

module.exports.addTeam = team =>{
    var novo = new PTeams(team);
    return novo.save();
}