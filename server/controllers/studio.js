var SongsModel = require('../models/songs').SongsModel;
var ChannelsModel = require('../models/channels').ChannelsModel;
var async = require("async");

function getDataForStudio(req,res,next) {
    if (!req.body.id) return next('missingId');
    SongsModel.getSongById(req.body.id,(err,song)=>{
        song = song.toObject();
        if (err || !song) return next('noSong');
        ChannelsModel.getChannelsBySongId(req.body.id,(err,channels) => {
            if (err || channels.length === 0) return next('noChannels');
            song.channels = channels;
            res.json(song);
        })
    })
}

function saveDataInStudio(req,res,next) {
    const newChannels = [];
    req.body.channels.forEach((channel) => {
        if (channel.new) {
            newChannels.push({
                title: channel.title,
                instrument: channel.instrument,
                songId: req.body.songId,
                effects: channel.effects,
                audioFiles: channel.audioFiles
            })
        }
    });
    async.each(newChannels,(channel,callback)=>{
        ChannelsModel.addNewChannel(channel,(err)=>{
            if (err) return callback(err);
            callback();
        })
    },(err) => {
        if (err) return next(err);
        res.json('saved');
    });
}

module.exports = {
    getDataForStudio,
    saveDataInStudio
};