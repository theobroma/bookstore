import express from 'express';
import bcrypt from 'bcryptjs';
import validateInput from '../shared/validations/signup';

let router = express.Router();

import User from '../models/user';

router.post('/', (req,res)=> {
    setTimeout(function() {
        const {errors,isValid} = validateInput(req.body);
        if(isValid){
            const {username,password} = req.body;
            const password_digest = bcrypt.hashSync('password', 10);
            const date = new Date();
            User({username:username,password:password_digest,createdAt: date}).save()
                .then( user => res.json({success:true}) )
                .catch(err => res.status(500).json ({error:err}));
        } else {
            res.status(400).json(errors);
        }
    }, 300);
});

router.get('/', (req,res)=> {
    User.find().then((data) => {
        res.send(data);
    });
});






export default router;
