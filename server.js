import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import jsonfile from 'jsonfile';
import mongoose from 'mongoose';
import config from './etc/config.json';
import Product from './models/product';

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

var port = 8080;
app.use( bodyParser.json() );
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));


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

app.get('/*', (req, res) => {
  res.render('index.html');
});

app.listen(port, ()=> {
  console.log(`app listening on port ${port}`);
});


module.exports = app;
