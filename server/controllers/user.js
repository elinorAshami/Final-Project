var UsersModel = require('../models/users').UsersModel;
var BandsModel = require('../models/bands').BandsModel;

function getUserData (req,res,next) {
    if (!req.body.id) return next('missingid');
    UsersModel.getUserById(req.body.id,(err,user) => {
        user = user.toObject();
        if (err || !user) return next('missinguser');
        BandsModel.getBandsByUserId(req.body.id, (err, bands) => {
            if (err) return next(err)
            user.bands = bands;
            res.json(user);
        });
    });
}

module.exports = {getUserData}