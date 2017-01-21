import express from 'express';
import Product from '../models/product';
import authenticate from '../middlewares/authenticate';
let router = express.Router();

router.get('/', authenticate,(req,res)=> {
    Product.find().distinct( "genre" ).then((data) => {
        res.send(data);
    });
});

router.get('/:genre', authenticate, (req,res)=> {
    let genre = req.params.genre;
    Product.find({ "genre": genre }).then((data) => {
        res.send(data);
    });
});


export default router;
