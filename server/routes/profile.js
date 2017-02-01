import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/user';
import Avatar from '../models/avatar';
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

router.get('/avatar', (req,res,next)=> {
    Avatar.findById("589262c0a4f2031080aed8dc").then((doc) => {
        res.contentType(doc.img.contentType);
        res.send(doc.img.data);
    });

/*
  Avatar.find(function (err, doc) {
    if (err) return next(err);
    res.contentType(doc.img.contentType);
    res.send(doc.img.data);
  });*/
});

export default router;
