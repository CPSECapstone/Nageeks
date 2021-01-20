var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session')

const dotenv = require('dotenv');
dotenv.config({path: __dirname+'/config/.env'});

const mongo = require('./mongoose_connection');
const keys = require('./config/keys');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionsRouter = require('./routes/sessions');
var appsRouter = require('./routes/applications');

var app = express();

app.use(logger('dev')); // res status output
app.use(express.json()); // middleware for POST and PUT that recognizes req.body as json
app.use(express.urlencoded({ extended: false })); // middleware that only parses and only UTF-8 encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

const SESS_LIFETIME = 10 * 1000; // 2 hours

app.use(session({
    name: "CloudHavenAuth",
    resave: false,
    saveUninitialized: false,
    secret: keys.expressSessionSecret,
    cookie: {
        maxAge: SESS_LIFETIME,
        domain: app.get('env') === 'production' ? "cloudHavenDomain" : "localhost",
        secure: app.get('env') === 'production'
    }
}));

app.use('/', indexRouter);
app.use('/sessions', sessionsRouter);
app.use('/users', usersRouter);
app.use('/applications', appsRouter);

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
