'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _signup = require('../shared/validations/signup');

var _signup2 = _interopRequireDefault(_signup);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function validateInput(data, otherValidations) {
    var _otherValidations = otherValidations(data),
        errors = _otherValidations.errors;

    return _user2.default.find({ username: data.username }).then(function (user) {
        if (user.length) {
            if (user[0].username === data.username) {
                errors.username = 'Sorry, username has been taken';
            }
        }
        return {
            errors: errors,
            isValid: (0, _isEmpty3.default)(errors)
        };
    });
}

router.post('/', function (req, res) {
    validateInput(req.body, _signup2.default).then(function (_ref) {
        var errors = _ref.errors,
            isValid = _ref.isValid;

        if (isValid) {
            var _req$body = req.body,
                username = _req$body.username,
                password = _req$body.password;

            var newUser = new _user2.default({
                username: username,
                password: password
            });
            newUser.save().then(function (user) {
                return res.json({ success: true });
            }).catch(function (err) {
                return res.status(500).json({ error: err });
            });
        } else {
            res.status(400).json(errors);
        }
    });
});

router.get('/', function (req, res) {
    _user2.default.find().then(function (data) {
        res.send(data);
    });
});

exports.default = router;