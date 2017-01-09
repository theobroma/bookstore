import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import jsonfile from 'jsonfile';
import mongoose from 'mongoose';
import morgan from 'morgan';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import config from './etc/config.json';
import flash from 'connect-flash';
import passport from 'passport';
import myFunc from './etc/passport';
myFunc(passport);
import Product from './models/product';
import Author from './models/author';
import User from './models/user';
//server routes
import users from './routes/users';

var app = express();



mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

var port = 8080;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

//Don't remove
nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

//Mock data
var file = 'data/data.json';
var data = jsonfile.readFileSync(file);
//All routes in the end
app.use ('/api/users',users);
app.get('/api/books', (req, res) => {
    Product.find().then((data) => {
        res.send(data);
    });
});

app.get('/api/authors', (req, res) => {
    Author.find().then((data) => {
        res.send(data);
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'./views/index.html'));
/*  console.log(req.cookies);
  console.log(req.session);*/
});

app.listen(port, ()=> {
  console.log(`app listening on port ${port}`);
});


module.exports = app;
