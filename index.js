var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8000;

app.use('/api/', api);

http.createServer(app).listen(port);

console.log("Server started on port " + port);

module.exports = app;