const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;

// Connect
const  connection = (closure) => {
  return MongoClient.connect( 'mongodb://user1:e.123456@ds255767.mlab.com:55767/bandit' , (err,db) => {
    if (err) return console.log(err);

    closure(db);
    });
};

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

//Get data
router.get('/index' , (req , res) => {
    connection((db) =>{
      db.collection('BANDS')
        .find()
        .toArray()
        .then((index)=>
          response.data = index;
          res.json(response);
        })
        .catch((err) => {
          sendError(err,res);
        });
    });
});

module.exports =  router;



