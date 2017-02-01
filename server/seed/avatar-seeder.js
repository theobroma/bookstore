import Avatar from '../models/avatar';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const imgPath = path.resolve(__dirname, '../public/images/')+'/default-avatar.jpg';


mongoose.connect('mongodb://localhost/bookstore');

var avatars = [
    new Avatar ({
      img:{
        data : fs.readFileSync(imgPath),
        contentType : 'image/png'
      }
    }),
    new Avatar ({
      img:{
        data : fs.readFileSync(imgPath),
        contentType : 'image/png'
      }
    }),
    new Avatar ({
      img:{
        data : fs.readFileSync(imgPath),
        contentType : 'image/png'
      }
    })
];

var done = 0;
for (var i = 0; i < avatars.length; i++) {
    avatars[i].save(function (err,result) {
        done++;
        if (done == avatars.length) {
            exit();
        }
    });
}
function exit() {
  mongoose.disconnect();
}

