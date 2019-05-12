var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user');

router.post('/getUserData', user_controller.getUserData);

module.exports = router;