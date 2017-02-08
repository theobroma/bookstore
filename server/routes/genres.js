import express from 'express';
import Product from '../models/product';

const router = express.Router();

router.get('/', (req, res) => {
  Product.find().distinct('genre').then((data) => {
    res.send(data);
  });
});

router.get('/:genre', (req, res) => {
  const genre = req.params.genre;
  Product.find({ genre }).then((data) => {
    res.send(data);
  });
});

export default router;
