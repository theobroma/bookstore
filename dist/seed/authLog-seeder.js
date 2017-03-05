'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _authlog = require('../models/authlog');

var _authlog2 = _interopRequireDefault(_authlog);

var _config = require('../../etc/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoUri = 'mongodb://' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name; /* eslint no-loop-func:0 */


_mongoose2.default.connect(mongoUri, function (error) {
  if (error) console.error(error);else console.log('mongo connected');
});

var users = [new _authlog2.default({
  username: 'admin@example.com'
}), new _authlog2.default({
  username: 'admin111@example.com'
}), new _authlog2.default({
  username: 'admin222@example.com'
})];

function exit() {
  _mongoose2.default.disconnect();
}

var done = 0;
for (var i = 0; i < users.length; i++) {
  users[i].save(function (err, result) {
    done++;
    if (done === users.length) {
      exit();
    }
  });
}
//# sourceMappingURL=authLog-seeder.js.map