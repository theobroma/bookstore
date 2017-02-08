import express from 'express';
import User from '../models/user';
import Avatar from '../models/avatar';

const router = express.Router();

router.get('/', (req, res) => {
  User.find({ _id: req.decodedId }).then((user) => {
    const username = user[0].username;
    const firstname = user[0].firstName;
    const lastname = user[0].lastName;
    const data = { username, firstname, lastname };
    res.send({ data });
  });
});

router.post('/', (req, res) => {
  User.findByIdAndUpdate(req.decodedId,
    { $set: { firstName: req.body.firstname,
      lastName: req.body.lastname }
    }, { new: true })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});

/* router.get('/avatar', (req,res,next)=> {
  Avatar.findById("589262c0a4f2031080aed8dc").then((doc) => {
    res.contentType(doc.img.contentType);
    res.send(doc.img.data);
  });
});*/

export default router;
