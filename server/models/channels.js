var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelsSchema = new Schema({
    instrument: String,
    title: String,
    songId: Schema.Types.ObjectId,
    audioFiles: [new Schema ({
        location: Number,
        audioUrl: String
    })],
    effects: [{
        type: String,
        value: Number,
    }],
    cDate: {type: Date, default: Date.now()},
    lmDate: {type: Date, default: Date.now()},
});

ChannelsSchema.statics.addNewChannel = function (channel,cb) {
    var ChannelsObjModel = new ChannelsModel(channel);
    ChannelsObjModel.save(cb);
};

ChannelsSchema.statics.updateChannel = function (channel,cb) {
    channel.lmDate = new Date();
    return this.update({_id:channel._id},channel,cb);
};


ChannelsSchema.statics.getChannelsBySongId = function (id,cb) {
    return this.find({songId:id},cb);
};

// Export the model
var ChannelsModel = mongoose.model('channels', ChannelsSchema);
module.exports.ChannelsModel = ChannelsModel;