var Users = require('../models/users')
var bcrypt = require('bcryptjs')


module.exports.list = () => {
    return Users.find().exec();
}

module.exports.addUser = user => {
    console.log(user)
    user.password = bcrypt.hashSync(user.password, 6);
    var novo = new Users(user);
    return novo.save();
}

module.exports.addPlayer = (player,user) =>{

    user.players.push(player);
    return user.save();
}

module.exports.changeAvatar = (id, path) => {
    return Users.update({ id: id }, { avatar: path }).exec()
}

module.exports.getUserId = id => {
    return Users.findOne({ id: id }).exec();
}

module.exports.getUser = email => {
    return Users.findOne({ email: email }).exec();
}

module.exports.deleteUser = email => {
    return Users.deleteOne({ email: email }).exec();
}

module.exports.updateUser = (id, novo) => {
    return Users.findOneAndUpdate({id: id}, novo, {new: true});
}