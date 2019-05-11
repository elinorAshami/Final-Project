// app.js
const path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var studio = require('./routes/studio'); // Imports routes for the products
var band = require('./routes/band');
var user = require('./routes/user');
var app = express();
var cors = require("cors");

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://user1:e.123456@ds255767.mlab.com:55767/bandit';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/studio', studio);
app.use('/users',user);
app.use('/bands',band);

app.get('/songstudio',(req,res) => {
    app.use(express.static(path.join(__dirname, '../client/build')));
    res.sendfile(path.join(__dirname, '../client/build/index.html'))
});

app.get('/',(req,res)=> {
    app.use(express.static(path.join(__dirname, '../app-new/dist/app-new')));
    res.sendfile(path.join(__dirname, '../app-new/dist/app-new/index.html'))
});

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
