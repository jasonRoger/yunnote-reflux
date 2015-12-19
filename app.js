var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var home = require('./routes/home');
var login = require('./routes/login');
var reg = require('./routes/reg');
var api = require('./routes/api');
var logout = require('./routes/logout');
var render = require('./routes/render');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.get('/favicon.ico', function(req, res) {
  res.end('null');
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 360000 * 24}));

app.use(session({
  secret: 'zuji5',
  key: 'zuji5',
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
  resave: true,
  saveUninitialized: true
}));

app.get("/", function(req, res, next) {
  res.redirect('/index');
});
app.use('/index', home);
app.use('/login', login);
app.use('/logout', logout);
app.use('/reg', reg);
app.use('/api', api);
app.use('/render', render);
//routes(app);
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

// app.listen(80);
module.exports = app;
