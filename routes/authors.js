import express from 'express';
import Product from '../models/product';
import Author from '../models/author';
let router = express.Router();

router.get('/', (req,res)=> {
    Product.find().distinct( "author" ).then((data) => {
        res.send(data);
    });
});

router.get('/:author', (req,res)=> {
    let author = req.params.author;
    Product.find({ "author.name": author }).then((data) => {
        res.send(data);
    });
});


export default router;
