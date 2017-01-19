import express from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
/*  const result = bcrypt.compareSync('111', '$2a$10$dqZw/1BvITf.BmCfsQcKcOlKz8sMLEl3/tNI1QRJNidosVwAHoche');
  res.send(result);*/


  User.find({ "username": identifier }).then((data) => {
    let userId = data[0]._id;
    let userName = data[0].username;
    let password_digest = data[0].password;

    if (userName) {
      if (bcrypt.compareSync(password, password_digest)) {
        const token = jwt.sign({
          id: userId,
          username: userName
        },'somesecretkeyforjsonwebtoken');
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials1' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials2' } });
    }

  });
});

export default router;
