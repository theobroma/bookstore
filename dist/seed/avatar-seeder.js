'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _avatar = require('../models/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-loop-func:0 */
var imgPath = _path2.default.resolve(__dirname, '../public/images/') + '/default-avatar.jpg';

_mongoose2.default.connect('mongodb://localhost/bookstore');

var avatars = [new _avatar2.default({
  img: {
    data: _fs2.default.readFileSync(imgPath),
    contentType: 'image/png'
  }
}), new _avatar2.default({
  img: {
    data: _fs2.default.readFileSync(imgPath),
    contentType: 'image/png'
  }
}), new _avatar2.default({
  img: {
    data: _fs2.default.readFileSync(imgPath),
    contentType: 'image/png'
  }
})];

function exit() {
  _mongoose2.default.disconnect();
}

var done = 0;
for (var i = 0; i < avatars.length; i++) {
  avatars[i].save(function (err, result) {
    done++;
    if (done === avatars.length) {
      exit();
    }
  });
}
//# sourceMappingURL=avatar-seeder.js.map