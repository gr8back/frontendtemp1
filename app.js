"use strict";

var express = require('express');

var path = require('path');

var logger = require('morgan');
// const path = require("path");
var cookieParser = require('cookie-parser');
// const dist = path.resolve(__dirname, "dist");
var bodyParser = require('body-parser');

require("@babel/register");

var index = require('./routes');

var users = require('./routes/users');

var http = require('http');

var fs = require('fs');

var app = express();
var port = 4321;
var server = http.createServer(app);
server.on("connect", function () {
  console.log("connected");
});
var appInstance = app.listen(port, function () {
  console.log("'Server listening at: ".concat(appInstance.address().port));
}); // view engine setup

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jsx');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.engine('jsx', require('express-react-views').createEngine()); // uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
}); // setup the logger

app.use(logger('combined', {
  stream: accessLogStream
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
console.log("your dirname " + __dirname);
app.use(express["static"](path.join(__dirname, 'public')));  //copied static files
app.use('/scripts', express.static(__dirname + '/node_modules/@glidejs/glide/dist/'));
app.use('/', index);
app.use('/users', users); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page
  console.log("ERROR " + err.message)
  res.status(err.status || 500);
  res.render('error');
});


app.get('/test', function(req, res) {
  res.render('index', {locals: {title: 'Welcome!'}});
});


// app.get('/', function(req, res) {
//   res.render('index', {locals: {title: 'Welcome!'}});
// });

console.log("gonna run a server here");
module.exports = app;
