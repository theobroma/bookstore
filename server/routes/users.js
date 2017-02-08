import express from 'express';
import _isEmpty from 'lodash/isEmpty';
import commonValidations from '../shared/validations/signup';
import User from '../models/user';

const router = express.Router();

function validateInput(data, otherValidations) {
  const { errors } = otherValidations(data);

  return User.find({ username: data.username })
 .then((user) => {
   if (user.length) {
     if (user[0].username === data.username) {
       errors.username = 'Sorry, username has been taken';
     }
   }
   return {
     errors,
     isValid: _isEmpty(errors)
   };
 });
}

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, password } = req.body;
      const newUser = new User({
        username,
        password
      });
      newUser.save()
                .then(() => res.json({ success: true }))
                .catch(err => res.status(500).json({ error: err }));
    } else {
      res.status(400).json(errors);
    }
  });
});

router.get('/', (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
});


export default router;
