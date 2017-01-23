import User from '../models/user';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/bookstore');

var users = [
    new User ({
        "username":"admin@example.com",
        "password":"111",
        "firstName":"Sasha",
        "lastName" : "Siryj",
        "cart" : {
            "addedIds": ["587a68ddb33d051a0c7c03d8","587a68ddb33d051a0c7c03d9"],
            "quantityById": {
                "587a68ddb33d051a0c7c03d8": 1,
                "587a68ddb33d051a0c7c03d9": 1
            }
        }
    }),
    new User ({
        "username":"test@example.com",
        "password":"111",
        "firstName":"Sasha",
        "lastName" : "Siryj",
        "cart" : {
            "addedIds": ["587a68ddb33d051a0c7c03d8","587a68ddb33d051a0c7c03d9"],
            "quantityById": {
                "587a68ddb33d051a0c7c03d8": 1,
                "587a68ddb33d051a0c7c03d9": 1
            }
        }
    }),
    new User ({
        "username":"taladaciza@yahoo.com",
        "password":"111",
        "firstName":"Sasha",
        "lastName" : "Siryj",
        "cart" : {
            "addedIds": ["587a68ddb33d051a0c7c03d8","587a68ddb33d051a0c7c03d9"],
            "quantityById": {
                "587a68ddb33d051a0c7c03d8": 1,
                "587a68ddb33d051a0c7c03d9": 1
            }
        }
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
