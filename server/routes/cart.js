import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import Product from '../models/product';
import User from '../models/user';
import authenticate from '../middlewares/authenticate';
let router = express.Router();

router.get('/', authenticate,(req,res)=> {
  User.find({ "_id": req.decodedId }).then(user => {
    let cart = user[0].cart;
    Product.find()
      .where('_id')
      .in(["587a68ddb33d051a0c7c03d8","587a68ddb33d051a0c7c03d9"])
      .exec(function (err, records) {
        res.send(cart);
    });
  });
});

// Убрать дубли товаров
router.post('/', authenticate,(req,res)=> {
  User.findByIdAndUpdate(req.decodedId,
    { $push: { "cart":{
      productId: req.body.productId,
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.body.thumbnail
     } } },
    { safe: true, upsert: true })
    .then( user => res.json({success:true}) )
    .catch(err => res.status(500).json ({error:err}));
});

router.delete('/:productId', authenticate,(req,res)=> {
  User.findByIdAndUpdate(req.decodedId,
    { $pull: { cart : { productId : req.params.productId } } },
    { safe: true })
  .then( user => res.json({success:true}) )
  .catch(err => res.status(500).json ({error:err}));
});

export default router;
