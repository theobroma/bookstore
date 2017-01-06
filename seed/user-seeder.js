var Author  =  require ('../models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore');

var users = [
    new User ({
        "name":"Рей Бредбери",
        "photo":"bradbury.jpg"
    }),
    new User ({
        "name":"Михаил Афанасьевич Булгаков",
        "photo":"bulgakov.jpg"
    })
];

var done = 0;
for (var i = 0; i < users .length; i++) {
    users[i].save(function (err,result) {
        done++;
        if (done == users.length) {
            exit();
        }
    });
}
function exit() {
  mongoose.disconnect();
}
