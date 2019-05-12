var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongsSchema = new Schema({
    bandId: Schema.Types.ObjectId,
    title : String,
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
    bpm : Number,
    length: Number,
    lastExportedUrl: String,
    isPublic: {type: Boolean, default: true},
    playCounter: {type:Number, default: 0}
});

SongsSchema.statics.getSongById = function (id,cb) {
    return this.findOne({_id:id},cb);
};

SongsSchema.statics.getSongsByBandId = function (id,cb) {
    return this.find({bandId:id},cb);
}

// Export the model
var SongsModel = mongoose.model('songs', SongsSchema);
module.exports.SongsModel = SongsModel;