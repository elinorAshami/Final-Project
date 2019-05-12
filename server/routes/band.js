var express = require('express');
var router = express.Router();
var band_controller = require('../controllers/band');

router.post('/getBandData', band_controller.getBandData);


module.exports = router;