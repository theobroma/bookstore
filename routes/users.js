import express from 'express';
import bcrypt from 'bcryptjs';
import _isEmpty from 'lodash/isEmpty';
import commonValidations from '../shared/validations/signup';

let router = express.Router();

import User from '../models/user';


function validateInput(data, otherValidations) {

 let { errors } = otherValidations(data);

 return User.find({username: data.username})
 .then(user => {
  if (user.length) {
   if (user[0].username === data.username) {
    errors.username = 'Sorry, username has been taken';
   }
  }
  return {
   errors,
   isValid: _isEmpty(errors)
  }
 });

}




router.post('/', (req,res) => {
    validateInput(req.body, commonValidations).then( ({ errors, isValid }) => {
        if(isValid){
            const {username,password} = req.body;
            const password_digest = bcrypt.hashSync('password', 10);
            const date = new Date();
            const newUser = new User({
               username: username,
               password:password_digest,
               createdAt: date
            });
            newUser.save()
                .then( user => res.json({success:true}) )
                .catch(err => res.status(500).json ({error:err}));
        } else {
            res.status(400).json(errors);
        }
    })
});

router.get('/', (req,res) => {
    User.find().then((data) => {
        res.send(data);
    });
});






export default router;
