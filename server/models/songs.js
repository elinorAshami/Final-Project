var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongsSchema = new Schema({
    bandId: Schema.Types.ObjectId,
    title : {type: String, default: 'New Song'},
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
    bpm : {type: Number, default: 120},
    length: {type: String, default: '3:00'},
    lastExportedUrl: String,
    isPublic: {type: Boolean, default: true},
    playCounter: {type:Number, default: 0}
});

SongsSchema.statics.addNewSong = function(id,cb) {
    var SongsObjModel = new SongsModel({bandId:id});
    SongsObjModel.save(cb);
}

SongsSchema.statics.getSongById = function (id,cb) {
    return this.findOne({_id:id},cb);
};

SongsSchema.statics.getSongsByBandId = function (id,cb) {
    return this.find({bandId:id},cb);
}

// Export the model
var SongsModel = mongoose.model('songs', SongsSchema);
module.exports.SongsModel = SongsModel;