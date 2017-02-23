/* eslint no-loop-func:0 */
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Avatar from '../models/avatar';
import config from '../../etc/config.json';

const imgPath = `${path.resolve(__dirname, '../public/images/')}/default-avatar.jpg`;


const mongoUri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
  if (error) console.error(error);
  else console.log('mongo connected');
});


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
