'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _authlog = require('../models/authlog');

var _authlog2 = _interopRequireDefault(_authlog);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Доделать проверку на существование юзера

router.post('/', function (req, res) {
  var _req$body = req.body,
      identifier = _req$body.identifier,
      password = _req$body.password;

  _user2.default.find({ username: identifier }).then(function (data) {
    var userId = data[0]._id;
    var userName = data[0].username;
    var passwordDigest = data[0].password;

    if (userName) {
      if (_bcryptjs2.default.compareSync(password, passwordDigest)) {
        var token = _jsonwebtoken2.default.sign({
          id: userId,
          username: userName,
          role: ["admin", "editor"]
        }, _config2.default.jwtSecret);
        //save auth to authlog
        var newAuthlog = new _authlog2.default({
          username: userName
        });
        newAuthlog.save();
        res.json({ token: token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

exports.default = router;
//# sourceMappingURL=auth.js.map