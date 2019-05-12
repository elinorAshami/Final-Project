  var mongoose = require('mongoose'),

  schema = mongoose.Schema,
  userSchema = new schema({
    bandname: {type:String, index:1, required:true},
    bandtype: String,
    discription: String,
    members: [{
      firstname: String,
      lastname: String
    }],
    songs:  [{
      songname:String,
      songtime: String
    }]
  }, {collection: 'BANDS'});
  console.log(`required paths: ${userSchema.requiredPaths()}`);
  console.log(`indexes: ${JSON.stringify(userSchema.indexes())}`);

  var User = mongoose.model('User',userSchema);
  module.exports = User;

