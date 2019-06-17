var express = require('express');
var router = express.Router();
var band_controller = require('../controllers/band');
var cloudinary = require('../controllers/cloudinary');

function isAuthenticated(req,res,next) {
    if (req.isAuthenticated()) next();
    else return res.status(401).json({message: 'Invalid Request'});
}
router.post('/getBandData', band_controller.getBandData);
router.post('/createNewSong', band_controller.createNewSong);
router.post('/createNewBand', cloudinary.uploadBase64Cloudinary, band_controller.createNewBand);
router.post('/getSongUrl', band_controller.getSongUrl);
router.post('/favoriteSong',isAuthenticated,band_controller.favoriteSong);
router.post('/getAllSongs',band_controller.getAllSongs)
router.get('/getFavorites',isAuthenticated,band_controller.getFavorites);

module.exports = router;