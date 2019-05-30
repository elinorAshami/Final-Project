var express = require('express');
var router = express.Router();
var User= require ('..//models/user'); //  ref to MODEL
var mongoose = require('mongoose');


mongoose.connect('mongodb://user1:e.123456@ds255767.mlab.com:55767/bandit'); //db
const conn = mongoose.connection; //get default connection

router.post('/register',function (req,res,next) {
  addUser(req, res);
  console.log('helooo');
});

async function addUser(req,res){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    pass: req.body.pass,
    cDate: Date.now()
  });
  try{
    doc = await  user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}
module.exports = router;
