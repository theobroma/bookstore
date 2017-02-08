import jwt from 'jsonwebtoken';
import config from '../config';

export default (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (decoded) {
        req.decodedId = decoded.id;
      } else {
        req.decodedId = null;
      }
    });
  }
  next();
};
