const consts = require('./consts');
const  mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;

//// Connect
mongoose.connect(consts.MLAB_KEY);
var conn = mongoose.connection;//get default connection

//define the MODEL
var userSchema = require('./user');

conn.on('error',
  (err) => {
    console.log(`connection error: ${err}`);
  });
conn.once('open',
  () => {
    console.log('connected');
    mongoose.disconnect();
  });

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

//Response handling
let response = {
  status:200,
  data:[],
  message: null
};

router.get('/users',(req,res) => {

  }

)
