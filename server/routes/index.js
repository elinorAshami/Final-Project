var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index');

router.get('/getIndexData', index_controller.getIndexData);
module.exports = router;