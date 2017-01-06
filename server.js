import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import flash from 'connect-flash';
import favicon from 'serve-favicon';
import jsonfile from 'jsonfile';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './etc/config.json';
import Product from './models/product';
import Author from './models/author';

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

var port = 8080;
app.use(morgan("dev"));
app.use( bodyParser.json() );
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));



// Allow requests from any origin
app.use(cors({ origin: '*' }));

//Don't remove
nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

//Mock data
var file = 'data/data.json';
var data = jsonfile.readFileSync(file);
//
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
  res.render('index.html',{ messages: req.flash('info') });
  console.log(req.cookies);
  console.log(req.session);
  console.log("========================");
});

app.listen(port, ()=> {
  console.log(`app listening on port ${port}`);
});


module.exports = app;
