var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var playerRouter = require('./routes/players');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index')

var app = express();
var cors = require('cors')
app.use(cors());

// Conexão base de dados
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://taliban:pri20192020@pri2019-oycpr.mongodb.net/test?retryWrites=true&w=majority', {dbName:"pri2019", useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => console.log("--> MongoAtlasDB connected\n"))
        .catch((error) => console.log("--> MongoAtlasDB connection refused\n" + error))


require('./middleware/passport');

function canAccess(req,done){
  console.log(req)
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/players', playerRouter);
app.use('/users', usersRouter);

app.use('/',indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
