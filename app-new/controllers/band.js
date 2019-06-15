var express = require('express');
var router = express.Router();
var User = require ('..//models/band'); //  ref to MODEL
var app = express();


router.post('/updateBand', (req, res) =>{
  console.log('hi');
  var ID = req.body.id;
  console.log(ID);
  User.findOne({_id: ID} , function (err, foundObject) {

    if (err) {
      console.log(err);
      console.log('Error!');
      res.status(500).send();
    }
    else {
      if (!foundObject){
        res.status(404).send();
        console.log('Not found object');
      } else {
        if (req.body.name) {
          foundObject.name = req.body.name;
        }
        if (req.body.description){
          foundObject.description = req.body.description;
        }
        if (req.body.genre){
          foundObject.genre = req.body.genre;
        }
        if (req.body.icon){
          foundObject.icon = req.body.icon;
        }

        foundObject.save(function (err, updateObject) {
          if (err){
            console.log(err);
            res.status(500).send();
          } else {
            res.send(updateObject);
          }
        })
      }
    }
  });

});


module.exports = router;

