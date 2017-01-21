import User from '../models/user';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/bookstore');

var users = [
    new User ({
        "username":"admin@example.com",
        "password":"111",
        "firstName":"Sasha",
        "lastName" : "Siryj"
    }),
    new User ({
        "username":"test@example.com",
        "password":"111",
        "firstName":"Sasha",
        "lastName" : "Siryj"
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
