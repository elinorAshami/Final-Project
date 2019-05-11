var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BandsSchema = new Schema({
    name : String,
    icon : String,
    genre : String,
    description : String,
    adminId : Schema.Types.ObjectId,
    members: [Schema.Types.ObjectId],
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
});

BandsSchema.statics.getBandById = function (id,cb) {
    return this.findOne({_id:id},cb);
}
BandsSchema.statics.getBandsByUserId = function (id,cb) {
    return this.find({members: id},cb)
};

var BandsModel = mongoose.model('bands', BandsSchema);
module.exports.BandsModel = BandsModel;