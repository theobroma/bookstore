/* eslint no-loop-func:0 */
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Avatar from '../models/avatar';

const imgPath = `${path.resolve(__dirname, '../public/images/')}/default-avatar.jpg`;


mongoose.connect('mongodb://localhost/bookstore');

const avatars = [
  new Avatar({
    img: {
      data: fs.readFileSync(imgPath),
      contentType: 'image/png'
    }
  }),
  new Avatar({
    img: {
      data: fs.readFileSync(imgPath),
      contentType: 'image/png'
    }
  }),
  new Avatar({
    img: {
      data: fs.readFileSync(imgPath),
      contentType: 'image/png'
    }
  })
];

function exit() {
  mongoose.disconnect();
}

let done = 0;
for (let i = 0; i < avatars.length; i++) {
  avatars[i].save((err, result) => {
    done++;
    if (done === avatars.length) {
      exit();
    }
  });
}
