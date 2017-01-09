import express from 'express';
import validator from 'validator';
let router = express.Router();

router.post('/', (req,res)=> {
    res.send(req.body);
});


export default router;
