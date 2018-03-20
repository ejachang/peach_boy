var express = require('express');
var bodyParser = require('body-parser');

var webpack = require('webpack');
var items = require('../database-postgresql');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000!');
});
