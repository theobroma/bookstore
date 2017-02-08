import express from 'express';
import Product from '../models/product';
const router = express.Router();

router.get('/', (req, res) => {
  Product.find().then((data) => {
    res.send(data);
  });
});

router.get('/:book', (req, res) => {
  const bookID = req.params.book;
  Product.find({ _id: bookID }).then((data) => {
    res.send(data);
  });
});


export default router;
