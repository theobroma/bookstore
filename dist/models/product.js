'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('Product', schema);