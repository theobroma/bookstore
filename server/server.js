import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import mongoose from 'mongoose';
import morgan from 'morgan';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import decodedId from './middlewares/decodedId';
//server routes
import books from './routes/books';
import genres from './routes/genres';
import users from './routes/users';
import authors from './routes/authors';
import auth from './routes/auth';
import profile from './routes/profile';
import cart from './routes/cart';

var app = express();
app.set('port', (process.env.PORT || 8080));
mongoose.Promise = global.Promise;
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/bookstore';

/*mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);*/

mongoose.connect(mongoUri, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

app.use(decodedId);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

//All routes in the end
app.use ('/api/books',books);
app.use ('/api/genres',genres);
app.use ('/api/users',users);
app.use ('/api/authors',authors);
app.use ('/api/auth',auth);
app.use ('/api/profile',profile);
app.use ('/api/cart',cart);

// Redirect all non api requests to the index
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'./views/index.html'));
});

app.listen(app.get('port'), ()=> {
   console.log('Node app is running on port', app.get('port'));
});


module.exports = app;
