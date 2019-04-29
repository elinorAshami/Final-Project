const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require ('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./connect');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname , 'dist')));

// API location
app.use('/connect' , api);

app.get = function (s, f) {
  
}
// Send all oter requests to the Angular app
app.get('*' , (req , res) => {
  res.sendFile(path.join(__dirname , 'index.html'));
  });

// Set Port
const port = process.env.PORT || '3000';
app.set('port' , port);

const server = http.createServer(app);

server.listen(port ,() => console.log('Running on localhost: ${port}'));
