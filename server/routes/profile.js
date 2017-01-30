import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/user';
let router = express.Router();

router.get('/', (req,res)=> {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        User.find({ "_id": decoded.id }).then(user => {
            let username = user[0].username;
            let firstname = user[0].firstName;
            let lastname = user[0].lastName;
            let data = { username, firstname, lastname };
            res.send({data});
        });
    });
});

router.post('/', (req,res)=> {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    jwt.verify( token, config.jwtSecret, (err, decoded) => {
      User.findByIdAndUpdate(decoded.id, { $set: { firstName: req.body.firstname, lastName: req.body.lastname }}, { new: true })
        .then( user => res.json({success:true}) )
        .catch(err => res.status(500).json ({error:err}));
    });
});



export default router;
