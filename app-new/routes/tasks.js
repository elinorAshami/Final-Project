var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const consts   = require('./consts');
var Band = require('./user');

mongoose.Promise = global.Promise;

mongoose.connect(consts.MLAB_KEY); //db
const conn = mongoose.connection; //get default connection

var User = require('./user'); //ref to MODEL

//Get all data
router.get('/tasks' , function (req , res , next) {
  User.find(function (err,tasks) {
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});

// Get single name

module.exports = router;

