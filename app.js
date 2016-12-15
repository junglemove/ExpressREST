var express = require('express');
var path = require('path');
var logger = require('morgan');
var contacts = require('./routes/contacts');

var app = express();


app.use(logger('dev'));
app.use('/api/v1.0/contacts', contacts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
