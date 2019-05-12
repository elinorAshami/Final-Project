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

/*router.post('/new-band' , function(req,res,next) {
  createBand(req,res);
});

async function createBand(req,res){

  var band = new Band({
    bandname: req.body.bandname,
    bandtype: req.body.bandtype,
    discription: req.body.discription,
    bandImg: req.body.bandImg,
    creation_dt: Date.now()
  });

  try {
    doc = await band.save();
    return res.status(201);
  }
  catch (err) {
    return res.status(501).json(err);

  }
}*/


// Get single name

module.exports = router;

