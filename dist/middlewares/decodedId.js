'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  var authorizationHeader = req.headers['authorization'];
  var token = void 0;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
    _jsonwebtoken2.default.verify(token, _config2.default.jwtSecret, function (err, decoded) {
      if (decoded) {
        req.decodedId = decoded.id;
      } else {
        req.decodedId = null;
      }
    });
  }
  next();
};