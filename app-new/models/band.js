var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


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


module.exports = mongoose.model('bands', BandsSchema);

