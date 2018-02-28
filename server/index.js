var express = require('express');
var bodyParser = require('body-parser');

var webpack = require('webpack');
var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

// app.get('/achievements', function (req, res) {
//   items.selectAll(function(err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(8000, function() {
  console.log('listening on port 8000!');
});
