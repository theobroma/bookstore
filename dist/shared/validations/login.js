'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateInput;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateInput(data) {
  var errors = {};

  if (_validator2.default.isEmpty(data.identifier)) {
    errors.identifier = 'This field is required';
  }

  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty3.default)(errors)
  };
}