var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    firstName : String,
    lastName : String,
    icon : String,
    email : String,
    pass : String,
    genre : [{type: String, enum: ["rock","punk","classic"]}],
    cDate : {type: Date, default: Date.now()},
    lmDate : {type: Date, default: Date.now()},
    isLooking : {type: Boolean, default: false},
    instrument : [{type: String, enum : ["guitar","vocal","bass","drums"]}],
});

UsersSchema.statics.getUserById = function (id,cb) {
    return this.findOne({_id:id},cb)
};

UsersSchema.statics.getUsersByIds = function(idArr,cb) {
    return this.find({_id: {$in : idArr}},cb)
}

var UsersModel = mongoose.model('users', UsersSchema);
module.exports.UsersModel = UsersModel;