'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _avatar = require('../models/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _authenticate2.default, function (req, res) {
  _user2.default.find({ _id: req.decodedId }).then(function (user) {
    var username = user[0].username;
    var firstname = user[0].firstName;
    var lastname = user[0].lastName;
    var data = { username: username, firstname: firstname, lastname: lastname };
    res.send({ data: data });
  });
});

router.post('/', _authenticate2.default, function (req, res) {
  _user2.default.findByIdAndUpdate(req.decodedId, { $set: { firstName: req.body.firstname,
      lastName: req.body.lastname }
  }, { new: true }).then(function () {
    return res.json({ success: true });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

router.get('/orders', _authenticate2.default, function (req, res) {
  _user2.default.find({ _id: req.decodedId }).then(function (user) {
    var orders = user[0].orders;
    res.send(orders);
  });
});

router.post('/orders', _authenticate2.default, function (req, res) {
  _user2.default.findByIdAndUpdate(req.decodedId, { $push: { orders: {
        list: req.body
      } } }, { safe: true, upsert: true }).then(function () {
    return res.json({ success: true });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

router.delete('/orders', _authenticate2.default, function (req, res) {
  _user2.default.findByIdAndUpdate(req.decodedId, { $set: { orders: [] } }).then(function () {
    return res.json({ success: true });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

/* router.get('/avatar', (req,res,next)=> {
  Avatar.findById("589262c0a4f2031080aed8dc").then((doc) => {
    res.contentType(doc.img.contentType);
    res.send(doc.img.data);
  });
});*/

exports.default = router;
//# sourceMappingURL=profile.js.map