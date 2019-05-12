var express = require('express');
var router = express.Router();
// var multer  = require('multer');
// var storage = multer.memoryStorage()
// var upload = multer({ storage: storage })
var studio_controller = require('../controllers/studio');


router.post('/getDataForStudio', studio_controller.getDataForStudio);
router.post('/saveDataInStudio',studio_controller.saveDataInStudio);


module.exports = router;