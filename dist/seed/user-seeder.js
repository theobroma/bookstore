'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-loop-func:0 */
_mongoose2.default.connect('mongodb://localhost/bookstore');

var users = [new _user2.default({
  username: 'admin@example.com',
  password: '111',
  firstName: 'Sasha',
  lastName: 'Siryj',
  cart: [{
    productId: '587a68ddb33d051a0c7c03d8',
    title: 'Марсианские хроники',
    thumbnail: 'marsianskie-khroniki.jpg',
    price: 9.99
  }, {
    productId: '587a68ddb33d051a0c7c03d9',
    title: 'Мастер и Маргарита',
    thumbnail: 'master-i-margarita.jpg',
    price: 9.99
  }],
  orders: [{
    list: [{
      productId: '587a68ddb33d051a0c7c03d8',
      title: 'Марсианские хроники',
      thumbnail: 'marsianskie-khroniki.jpg',
      price: 9.99
    }, {
      productId: '587a68ddb33d051a0c7c03d9',
      title: 'Мастер и Маргарита',
      thumbnail: 'master-i-margarita.jpg',
      price: 9.99
    }]
  }]
}), new _user2.default({
  username: 'test@example.com',
  password: '111',
  firstName: 'Sasha',
  lastName: 'Siryj',
  cart: [{
    productId: '587a68ddb33d051a0c7c03d8',
    title: 'Марсианские хроники',
    thumbnail: 'marsianskie-khroniki.jpg',
    price: 9.99
  }, {
    productId: '587a68ddb33d051a0c7c03d9',
    title: 'Мастер и Маргарита',
    thumbnail: 'master-i-margarita.jpg',
    price: 9.99
  }],
  orders: [{
    list: [{
      productId: '587a68ddb33d051a0c7c03d8',
      title: 'Марсианские хроники',
      thumbnail: 'marsianskie-khroniki.jpg',
      price: 9.99
    }, {
      productId: '587a68ddb33d051a0c7c03d9',
      title: 'Мастер и Маргарита',
      thumbnail: 'master-i-margarita.jpg',
      price: 9.99
    }]
  }]
}), new _user2.default({
  username: 'taladaciza@yahoo.com',
  password: '111',
  firstName: 'Sasha',
  lastName: 'Siryj',
  cart: [{
    productId: '587a68ddb33d051a0c7c03d8',
    title: 'Марсианские хроники',
    thumbnail: 'marsianskie-khroniki.jpg',
    price: 9.99
  }, {
    productId: '587a68ddb33d051a0c7c03d9',
    title: 'Мастер и Маргарита',
    thumbnail: 'master-i-margarita.jpg',
    price: 9.99
  }],
  orders: [{
    list: [{
      productId: '587a68ddb33d051a0c7c03d8',
      title: 'Марсианские хроники',
      thumbnail: 'marsianskie-khroniki.jpg',
      price: 9.99
    }, {
      productId: '587a68ddb33d051a0c7c03d9',
      title: 'Мастер и Маргарита',
      thumbnail: 'master-i-margarita.jpg',
      price: 9.99
    }]
  }, {
    list: [{
      productId: '58950d8155d9cd1b887b4490',
      title: 'Утраченный символ',
      thumbnail: 'utrachennyy-simvol.jpg',
      price: 9.99
    }, {
      productId: '58950d8155d9cd1b887b4492',
      title: 'Точка обмана',
      thumbnail: 'tochka-obmana.jpg',
      price: 9.99
    }]
  }]
})];

function exit() {
  _mongoose2.default.disconnect();
}

var done = 0;
for (var i = 0; i < users.length; i++) {
  users[i].save(function (err, result) {
    done++;
    if (done === users.length) {
      exit();
    }
  });
}
//# sourceMappingURL=user-seeder.js.map