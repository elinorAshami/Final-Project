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
    SongsModel.updateSong(req.body,(err,song) => {
        if (err || !song) return next('noSong');
        req.body.deletedChannels = JSON.parse(req.body.deletedChannels);
        req.body.deletedChannels.forEach((channel) => {
            channel.deleted = true;
            req.body.channels.push(channel);
        });
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
            } else if (channel.deleted) {
                ChannelsModel.deleteChannel(channel,(err)=>{
                    if (err) return callback(err);
                    callback();
                })
            } else {
                callback();
            }

        },(err) => {
            if (err) return next(err);
            res.json('saved');
        });
    });
}

function saveExportedSong(req,res,next) {
    if (!req.body.songId) return next('missingId');
    SongsModel.updateSongExport({_id:req.body.songId,lastExportedUrl:req.body.lastExportedUrl},(err,song)=>{
        if (err || !song) return next('noSong');
        res.json(song);
    })
}

module.exports = {
    saveExportedSong,
    getDataForStudio,
    saveDataInStudio
};