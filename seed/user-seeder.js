var User =  require ('../models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore');

var users = [
    new User ({
        "username":"admin@example.com",
        "password":"admin"
    }),
    new User ({
        "username":"test@example.com",
        "password":"test"
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
