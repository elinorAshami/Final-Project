var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChartsSchema = new Schema({
    topSongs: [{
        bandName: String,
        title: String,
        imgUrl: String,
        songId: String,
    }],
    topBands: [{
        bandName: String,
        imgUrl: String,
        bandId: String,
    }],
    featuredMain: {
        imgUrl: String,
        songId: String,
    },
    featured: [{
        imgUrl: String,
        songId: String,
    }]
});


ChartsSchema.statics.getChartData = function (cb) {
    return this.findOne({},cb)
};


var ChartsModel = mongoose.model('charts', ChartsSchema);
module.exports.ChartsModel = ChartsModel;