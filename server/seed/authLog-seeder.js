/* eslint no-loop-func:0 */
import mongoose from 'mongoose';
import Authlog from '../models/authlog';
import config from '../../etc/config.json';

const mongoUri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
  if (error) console.error(error);
  else console.log('mongo connected');
});

const users = [
  new Authlog({
    username: 'admin@example.com',
  }),
  new Authlog({
    username: 'admin111@example.com',
  }),
  new Authlog({
    username: 'admin222@example.com',
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
