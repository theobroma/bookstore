/* eslint no-loop-func:0 */
import mongoose from 'mongoose';
import User from '../models/user';
import config from '../../etc/config.json';

const mongoUri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
  if (error) console.error(error);
  else console.log('mongo connected');
});

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
    ],
    orders : [
      {
        list : [
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
        ],
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
    ],
    orders : [
      {
        list : [
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
        ],
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
    ],
    orders : [
      {
        list : [
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
        ],
      },
      {
        list : [
          {
            productId: '58950d8155d9cd1b887b4490',
            title: 'Утраченный символ',
            thumbnail: 'utrachennyy-simvol.jpg',
            price: 9.99
          },
          {
            productId: '58950d8155d9cd1b887b4492',
            title: 'Точка обмана',
            thumbnail: 'tochka-obmana.jpg',
            price: 9.99
          }
        ],
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
