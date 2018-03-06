var express = require('express');
var bodyParser = require('body-parser');

var webpack = require('webpack');
var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../src/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000!');
});
