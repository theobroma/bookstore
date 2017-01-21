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
            res.send( {username,firstname,lastname});
        });
    });
});

export default router;
