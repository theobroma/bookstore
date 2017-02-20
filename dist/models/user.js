'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var cartItemSchema = new Schema({
  productId: {
    type: String,
    required: true
  },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

var orderSchema = new Schema({
  orderId: {
    type: Number,
    required: true,
    default: 777
  },
  list: [cartItemSchema],
  date: { type: Date, default: Date.now }
});

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  cart: [cartItemSchema],
  orders: [orderSchema]
});

UserSchema.pre('save', function (next) {
  if (this.password) {
    var salt = _bcryptjs2.default.genSaltSync(10);
    this.password = _bcryptjs2.default.hashSync(this.password, salt);
  }
  next();
});

module.exports = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map