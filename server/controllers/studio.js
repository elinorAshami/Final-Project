var SongsModel = require('../models/songs').SongsModel;
var ChannelsModel = require('../models/channels').ChannelsModel;
var async = require("async");

function getDataForStudio(req,res,next) {
    if (!req.body.id) return next('missingId');
    SongsModel.getSongById(req.body.id,(err,song)=>{
        if (err || !song) return next('noSong');
        song = song.toObject();
        ChannelsModel.getChannelsBySongId(req.body.id,(err,channels) => {
            if (err) return next('noChannels');
            song.channels = channels;
            res.json(song);
        })
    })
}

function saveDataInStudio(req,res,next) {
    async.each(req.body.channels,(channel,callback)=>{
        if (channel.new) {
            let newChannel = {
                title: channel.title,
                instrument: channel.instrument,
                songId: req.body.songId,
                effects: channel.effects,
                audioFiles: channel.audioFiles
            };
            ChannelsModel.addNewChannel(newChannel,(err)=>{
                if (err) return callback(err);
                callback();
            })
        } else if (channel.edited) {
            ChannelsModel.updateChannel(channel,(err)=>{
                if (err) return callback(err);
                callback();
            })
        }

    },(err) => {
        if (err) return next(err);
        res.json('saved');
    });
}

module.exports = {
    getDataForStudio,
    saveDataInStudio
};