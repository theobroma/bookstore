'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var schema = new Schema({
  username: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = _mongoose2.default.model('Authlog', schema);
//# sourceMappingURL=authlog.js.map