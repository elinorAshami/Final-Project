var UsersModel = require('../models/users').UsersModel;
var BandsModel = require('../models/bands').BandsModel;
var SongsModel = require('../models/songs').SongsModel;

function getBandData (req,res,next) {
    if (!req.body.id) return next('missingid');
    BandsModel.getBandById(req.body.id,(err,band) => {
        if (err || !band) return next('missinguser');
        band = band.toObject();
        UsersModel.getUsersByIds(band.members, (err, members) => {
            if (err) return next(err)
            band.members = members;
            SongsModel.getSongsByBandId(band._id,(err,songs)=>{
                if (err) return next(err);
                band.songs = songs;
                res.json(band);
            });
        });
    });
}

function createNewBand(req,res,next) {
    if (!req.body.creator) return next('missingid');
    const objReq = {
        managerId : req.body.creator,
        members: [req.body.creator],
        name :req.body.name,
        description: req.body.description,
        icon : req.body.icon,
        genre : req.body.genre
    };
    BandsModel.addNewBand(objReq,(err,band)=> {
        if (err) return next(err);
        res.json({_id: band._id});
    })
}

function createNewSong (req,res,next) {
    if (!req.body.id) return next('missingid');
    SongsModel.addNewSong(req.body.id,(err,song)=> {
        if (err) return next(err);
        res.json({_id: song._id});
    })
}

module.exports = {getBandData,createNewSong,createNewBand};