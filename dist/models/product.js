'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var schema = new Schema({
  title: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    photo: { type: String, required: true }
  },
  genre: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = _mongoose2.default.model('Product', schema);
//# sourceMappingURL=product.js.map