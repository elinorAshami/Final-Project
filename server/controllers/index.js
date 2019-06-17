var ChartsModel = require('../models/charts').ChartsModel;

function getIndexData (req,res,next) {
    ChartsModel.getChartData((err,chartData) => {
       if (err) next('charterror');
       res.json(chartData)
    });
}


module.exports = {getIndexData};