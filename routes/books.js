import express from 'express';
import Product from '../models/product';
import Author from '../models/author';
let router = express.Router();

router.get('/', (req,res)=> {
    Product.find().then((data) => {
        res.send(data);
    });
});

router.get('/:book', (req,res)=> {
    let bookID = req.params.book;
    Product.find({ "_id": bookID }).then((data) => {
        res.send(data);
    });
});


export default router;
