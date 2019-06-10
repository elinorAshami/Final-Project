var express = require('express');
var router = express.Router();
var User = require ('..//models/user'); //  ref to MODEL
var passport = require('passport');

var app = express();




router.post('/register',function (req,res,next) {
  addUser(req, res);
});

async function addUser(req,res){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    genre: req.body.genre,
    pass: User.hashPassword(req.body.pass),
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
router.post('/updateUser', (req, res) =>{
  console.log('hi');
  //var Email = req.body.email;
  //console.log(Email);
  var ID = req.body.id
  console.log(ID)
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
        if (req.body.firstName) {
          foundObject.firstName = req.body.firstName;
        }
        if (req.body.lastName)  {
          foundObject.lastName = req.body.lastName;
        }
        if (req.body.email){
          foundObject.email = req.body.email;
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

router.post('/login',function (req,res,next) {
  passport.authenticate('local', function (err, user, info) {
    if (err){
      return res.status(501).json(err);
    }
    if (!user){
      return res.status(501).json(info);
    }
    req.logIn(user, function(err) {
      if (err){
        return res.status(501).json(err);
      }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);
});

router.get('/user', isValidUser, function (req,res,next) {
  return res.status(200).json(req.user);
});

router.get('/logout', isValidUser, function (req,res,next) {
  req.logout();
  return res.status(200).json({message:'Logout Success'});
});

function isValidUser(req,res,next){
  if ( req.isAuthenticated() )
    next();
  else
    return res.status(401).json({message: 'Invalid Request'});
}


module.exports = router;
