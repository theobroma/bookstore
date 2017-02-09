import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;
const cartItemSchema = new Schema({
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

const orderSchema = new Schema({
  orderId: {
    type: Number,
    required: true,
    default: 777
  },
  list: [cartItemSchema],
  date: { type: Date, default: Date.now }
});

const UserSchema = new Schema({
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
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
