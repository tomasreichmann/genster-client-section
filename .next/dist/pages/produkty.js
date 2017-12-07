'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Section = require('../components/Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Products = function Products() {
  return _react2.default.createElement(_Layout2.default, { title: 'produkty' }, _react2.default.createElement(_Section2.default, null, _react2.default.createElement('h1', null, 'Produkty')));
};

exports.default = Products;