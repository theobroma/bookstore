var path = require('path');
var express = require('express');
var nunjucks  = require('nunjucks');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var jsonfile = require('jsonfile');
var mongoose = require('mongoose');

var Product  =  require ('./models/product');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookstore');

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

app.get('/api/books', function(req, res) {
    Product.find().then(function (data) {
        res.send(data);
    });
});


app.get('/*', function(req, res) {
  res.render('index.html');
});


app.listen(port, function() {
  console.log('app listening on port ' + port);
});


module.exports = app;
