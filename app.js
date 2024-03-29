var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// [CONFIGURE mongoose]

// connect to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    // connected to mongodb server
    console.log('Connected to mongodb server');
});

mongoose.connect('mongodb://localhost/mongodb_turorial');

// define model
var Book = require('./models/book');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SAVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book);

// [RUN SERVER]
var server = app.listen(port, function() {
    console.log('Express server has started on port ' + port);
});