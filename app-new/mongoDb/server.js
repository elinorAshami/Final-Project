const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require ('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./conn');


