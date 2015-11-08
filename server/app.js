var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
require('./models/State');
require('./models/District');
require('./models/Town');
require('./models/Township');
require('./models/Village');
require('./models/VillageTract');
require('./models/Ward');
mongoose.connect('mongodb://localhost/fruitbasket');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.set('view engine', 'ejs');



app.set('views', '../client/views');

// Static files
app.use('/bower_components', express.static('../client/bower_components'));
app.use('/javascripts', express.static('../client/javascripts'));
app.use('/partials', express.static('../client/views/partials'));
app.use('/stylesheets', express.static('../client/stylesheets'));

// Routes
var routes = require('./routes/index');
app.use('/', routes);

// Error Handling
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
