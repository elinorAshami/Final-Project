var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


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

UsersSchema.statics.hashPassword = function hashPassword( pass ){
  return bcrypt.hashSync( pass , 10 );
}

UsersSchema.methods.isValid = function ( hashPassword ){
  return bcrypt.compareSync( hashPassword , this.pass );
}

module.exports = mongoose.model('users', UsersSchema);
