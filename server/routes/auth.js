import express from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';

const router = express.Router();

// Доделать проверку на существование юзера

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  User.find({ username: identifier }).then((data) => {
    const userId = data[0]._id;
    const userName = data[0].username;
    const password_digest = data[0].password;

    if (userName) {
      if (bcrypt.compareSync(password, password_digest)) {
        const token = jwt.sign({
          id: userId,
          username: userName
        }, config.jwtSecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

export default router;
