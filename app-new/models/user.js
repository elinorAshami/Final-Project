var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsersSchema = new Schema({
  firstName : String,
  lastName : String,
  icon : String,
  email : String,
  pass : String,
  genre : [{type: String, enum: ["rock","punk","classic"]}],
  cDate : {type: Date, default: Date.now()},
  lmDate : {type: Date, default: Date.now()},
  isLooking : {type: Boolean, default: false},
  instrument : [{type: String, enum : ["guitar","vocal","bass","drums"]}],
});

module.exports = mongoose.model('users', UsersSchema);
