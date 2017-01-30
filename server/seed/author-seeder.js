var Author  =  require ('../models/author');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore');

var authors = [
    new Author ({
        "name":"Рей Бредбери",
        "photo":"bradbury.jpg"
    }),
    new Author ({
        "name":"Михаил Афанасьевич Булгаков",
        "photo":"bulgakov.jpg"
    })
];

var done = 0;
for (var i = 0; i < authors.length; i++) {
    authors[i].save(function (err,result) {
        done++;
        if (done == authors.length) {
            exit();
        }
    });
}
function exit() {
  mongoose.disconnect();
}
