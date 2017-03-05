import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import Authlog from '../models/authlog';
import config from '../config';

const router = express.Router();

// Доделать проверку на существование юзера

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  User.find({ username: identifier }).then((data) => {
    const userId = data[0]._id;
    const userName = data[0].username;
    const passwordDigest = data[0].password;

    if (userName) {
      if (bcrypt.compareSync(password, passwordDigest)) {
        const token = jwt.sign({
          id: userId,
          username: userName,
          role: ["admin","editor"]
        }, config.jwtSecret);
        //save auth to authlog
        const newAuthlog = new Authlog({
          username: userName
        });
        newAuthlog.save();
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
