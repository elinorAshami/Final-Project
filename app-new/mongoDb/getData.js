const consts   = require('./consts'),
      mongoose = require('mongoose');
      express = require('express');

mongoose.Promise = global.Promise;

mongoose.connect(consts.MLAB_KEY);
const conn = mongoose.connection; //get default connection

var User = require('./user'); //ref to MODEL

var app = express();

app.get("/profile" , function (req,res) {
  res.send('heloo')
})

app.listen(3000);

