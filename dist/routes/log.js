'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _authlog = require('../models/authlog');

var _authlog2 = _interopRequireDefault(_authlog);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Доделать проверку на существование юзера

router.get('/', function (req, res) {
  _authlog2.default.find().then(function (data) {
    res.send(data);
  });
});

exports.default = router;
//# sourceMappingURL=log.js.map