import express from 'express';
import Product from '../models/product';
import User from '../models/user';
import authenticate from '../middlewares/authenticate';

const router = express.Router();

router.get('/', authenticate, (req, res) => {
  User.find({ _id: req.decodedId }).then((user) => {
    const cart = user[0].cart;
    res.send(cart);
/*    Product.find()
      .where('_id')
      .in(['587a68ddb33d051a0c7c03d8', '587a68ddb33d051a0c7c03d9'])
      .exec((err, records) => {
        res.send(cart);
      });*/
  });
});

// Убрать дубли товаров
router.post('/', authenticate, (req, res) => {
  User.findByIdAndUpdate(req.decodedId,
    { $push: { cart: {
      productId: req.body.productId,
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.body.thumbnail
    } } },
    { safe: true, upsert: true })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});

router.delete('/:productId', authenticate, (req, res) => {
  User.findByIdAndUpdate(req.decodedId,
    { $pull: { cart: { productId: req.params.productId } } },
    { safe: true })
  .then(() => res.json({ success: true }))
  .catch(err => res.status(500).json({ error: err }));
});

export default router;
