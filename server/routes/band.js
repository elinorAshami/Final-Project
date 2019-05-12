var express = require('express');
var router = express.Router();
var band_controller = require('../controllers/band');

router.post('/getBandData', band_controller.getBandData);
router.post('/createNewSong', band_controller.createNewSong);
router.post('/createNewBand', band_controller.createNewBand);

module.exports = router;