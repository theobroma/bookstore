/* eslint no-loop-func:0 */
import mongoose from 'mongoose';
import User from '../models/user';

mongoose.connect('mongodb://localhost/bookstore');

const users = [
  new User({
    username: 'admin@example.com',
    password: '111',
    firstName: 'Sasha',
    lastName: 'Siryj',
    cart: [
      {
        productId: '587a68ddb33d051a0c7c03d8',
        title: 'Марсианские хроники',
        thumbnail: 'marsianskie-khroniki.jpg',
        price: 9.99
      },
      {
        productId: '587a68ddb33d051a0c7c03d9',
        title: 'Мастер и Маргарита',
        thumbnail: 'master-i-margarita.jpg',
        price: 9.99
      }
    ]
  }),
  new User({
    username: 'test@example.com',
    password: '111',
    firstName: 'Sasha',
    lastName: 'Siryj',
    cart: [
      {
        productId: '587a68ddb33d051a0c7c03d8',
        title: 'Марсианские хроники',
        thumbnail: 'marsianskie-khroniki.jpg',
        price: 9.99
      },
      {
        productId: '587a68ddb33d051a0c7c03d9',
        title: 'Мастер и Маргарита',
        thumbnail: 'master-i-margarita.jpg',
        price: 9.99
      }
    ]
  }),
  new User({
    username: 'taladaciza@yahoo.com',
    password: '111',
    firstName: 'Sasha',
    lastName: 'Siryj',
    cart: [
      {
        productId: '587a68ddb33d051a0c7c03d8',
        title: 'Марсианские хроники',
        thumbnail: 'marsianskie-khroniki.jpg',
        price: 9.99
      },
      {
        productId: '587a68ddb33d051a0c7c03d9',
        title: 'Мастер и Маргарита',
        thumbnail: 'master-i-margarita.jpg',
        price: 9.99
      }
    ]
  })
];

function exit() {
  mongoose.disconnect();
}

let done = 0;
for (let i = 0; i < users.length; i++) {
  users[i].save((err, result) => {
    done++;
    if (done === users.length) {
      exit();
    }
  });
}
