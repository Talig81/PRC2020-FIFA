var PTeams = require('../models/pTeams')

module.exports.getTeam = id =>{
    return PTeams.findOne({id: id}).exec();
}

