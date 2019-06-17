var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BandsSchema = new Schema({
    name : String,
    icon : String,
    genre : String,
    description : String,
    adminId : Schema.Types.ObjectId,
    members: [Schema.Types.ObjectId],
    pendingMembers: [String],
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
});

BandsSchema.statics.addNewBand = function(band,cb) {
    var BandsObjModel = new BandsModel(band);
    BandsObjModel.save(cb);
}

BandsSchema.statics.getBandById = function (id,cb) {
    return this.findOne({_id:id},cb);
}
BandsSchema.statics.getBandsByUserId = function (id,cb) {
    return this.find({members: id},cb)
};

BandsSchema.statics.getBandsByIds = function (idsArray,cb) {
    return this.find({_id: {$in : idsArray}},cb)
};

BandsSchema.statics.registerPendingMember = function (user,cb) {
    var query = {
        pendingMembers : user.email
    };
    var update = {
        $pull : {pendingMembers : user.email},
        $addToSet : {members: user._id}
    }
    return this.update(query,update,cb)
};

var BandsModel = mongoose.model('bands', BandsSchema);
module.exports.BandsModel = BandsModel;