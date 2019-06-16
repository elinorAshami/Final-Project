var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    firstName : String,
    lastName : String,
    icon : String,
    email : String,
    pass : String,
    genre : {type: String, enum: ["Rock","Punk","Classic"]},
    cDate : {type: Date, default: Date.now()},
    lmDate : {type: Date, default: Date.now()},
    isLooking : {type: Boolean, default: false},
    instrument : {type: String, enum : ["Guitar","Vocal","Bass","Drums"]},
});

UsersSchema.statics.addNewUser = function (user,cb) {
    var UserObjModel = new UsersModel({
        firstName: user.firstName,
        lastName: user.lastName,
        icon: user.icon,
        email: user.email,
        pass: user.pass,
        genre: user.genre,
        isLooking: false,
        instrument: user.instrument
    });
    UserObjModel.save(cb);
}

UsersSchema.statics.getUserById = function (id,cb) {
    return this.findOne({_id:id},cb)
};

UsersSchema.statics.getUserByUsername = function (email,cb) {
    return this.findOne({email},cb)
};

UsersSchema.statics.getUsersByIds = function(idArr,cb) {
    return this.find({_id: {$in : idArr}},cb)
}

var UsersModel = mongoose.model('users', UsersSchema);
module.exports.UsersModel = UsersModel;