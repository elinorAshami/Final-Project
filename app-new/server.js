const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require ('http');


const app = express();

//const index = require('./routes/index');
const tasks = require('./routes/tasks');
const users = require('./controllers/user');

//View Engine
//app.set('views' , path.join(__dirname,'views'));
app.set('views engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Set Static Folder
app.use(express.static(path.join('dist/app-new')));


//app.use('/' , index);
//app.use('/index' , index);
app.use('/api' , tasks);
app.use('/user' , users);

// Set Port
const port = process.env.PORT || '3000';

app.listen(port , function () {
  console.log('server started on port' + port );
  
})
