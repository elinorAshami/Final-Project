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

module.exports = {getBandData}