//creating module express
const express = require('express');
//saving in a const app
const app = express();

//using __dirname to get the absolute path of
//the directory, that contains the xml.file

app.use (express.static(__dirname + '/app'));


//app/config/index.js
module.exports = app;


