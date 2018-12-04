var express = require('express');
var bodyParser = require('body-parser');

var webpack = require('webpack');
var items = require('../database-postgresql');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

const portNum = process.env.PORT || 8111;
app.listen(portNum, function() {
  console.log(`listening on port ${portNum}`);
});
