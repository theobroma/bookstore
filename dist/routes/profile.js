'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    var authorizationHeader = req.headers['authorization'];
    var token = void 0;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    _jsonwebtoken2.default.verify(token, _config2.default.jwtSecret, function (err, decoded) {
        _user2.default.find({ "_id": decoded.id }).then(function (user) {
            var username = user[0].username;
            var firstname = user[0].firstName;
            var lastname = user[0].lastName;
            var data = { username: username, firstname: firstname, lastname: lastname };
            res.send({ data: data });
        });
    });
});

router.post('/', function (req, res) {
    var authorizationHeader = req.headers['authorization'];
    var token = void 0;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    _jsonwebtoken2.default.verify(token, _config2.default.jwtSecret, function (err, decoded) {
        _user2.default.findByIdAndUpdate(decoded.id, { $set: { firstName: req.body.firstname, lastName: req.body.lastname } }, { new: true }).then(function (user) {
            return res.json({ success: true });
        }).catch(function (err) {
            return res.status(500).json({ error: err });
        });
    });
});

exports.default = router;