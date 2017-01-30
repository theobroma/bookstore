'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../models/product');

var _product2 = _interopRequireDefault(_product);

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _authenticate2.default, function (req, res) {
    _product2.default.find().distinct("genre").then(function (data) {
        res.send(data);
    });
});

router.get('/:genre', _authenticate2.default, function (req, res) {
    var genre = req.params.genre;
    _product2.default.find({ "genre": genre }).then(function (data) {
        res.send(data);
    });
});

exports.default = router;