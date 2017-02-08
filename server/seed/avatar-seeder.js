import Avatar from '../models/avatar';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

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

let done = 0;
for (let i = 0; i < avatars.length; i++) {
  avatars[i].save((err, result) => {
    done++;
    if (done == avatars.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}

