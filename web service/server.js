var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.get('/' , function (req,res) {
    console.log( '${_dirname}');
    res.sendFile('{_dirname}/index.html');

});

app.listen(port);
console.log('listening on port ${port}');
