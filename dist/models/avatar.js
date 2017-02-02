'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by Sasha on 01.02.2017.
                                         */


var schema = new Schema({
  img: { data: Buffer, contentType: String }
});

module.exports = _mongoose2.default.model('Avatar', schema);