import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import Product from '../models/product';
import User from '../models/user';
import authenticate from '../middlewares/authenticate';
let router = express.Router();

router.get('/', authenticate,(req,res)=> {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
     jwt.verify(token, config.jwtSecret, (err, decoded) => {
        User.find({ "_id": decoded.id }).then(user => {
            let cart = user[0].cart;
            Product.find()
              .where('_id')
              .in(["587a68ddb33d051a0c7c03d8","587a68ddb33d051a0c7c03d9"])
              .exec(function (err, records) {
                res.send(records);
            });
        });
    });
});


export default router;
