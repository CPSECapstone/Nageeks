var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv');
dotenv.config({path: __dirname+'/config/.env'});

const mongo = require('./mongoose_connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev')); // res status output
app.use(express.json()); // middleware for POST and PUT that recognizes req.body as json
app.use(express.urlencoded({ extended: false })); // middleware that only parses and only UTF-8 encoded bodies
app.use(cookieParser()); // middleware for request that allows you to access cookies by res.cookies
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({message: `Error ${err.status}: ${err.message}`});
});

module.exports = app;
