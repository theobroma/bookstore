import express from 'express';
import jwt from 'jsonwebtoken';
import Authlog from '../models/authlog';
import config from '../config';

const router = express.Router();

// Доделать проверку на существование юзера

router.get('/', (req, res) => {
  Authlog.find().then((data) => {
    res.send(data);
  });
});

export default router;
