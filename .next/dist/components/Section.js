'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require('../constants/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_Component) {
  (0, _inherits3.default)(Section, _Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);

    return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).apply(this, arguments));
  }

  (0, _createClass3.default)(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          inverted = _props.inverted;

      return _react2.default.createElement('section', {
        className: _style2.default.dynamic([['2957026600', [inverted ? _theme2.default.color.paperInverted : _theme2.default.color.paper, inverted ? _theme2.default.color.textInverted : _theme2.default.color.text, _theme2.default.spacing.verticalBig, _theme2.default.spacing.horizontalBig * -1, _theme2.default.spacing.verticalBig * 2, _theme2.default.spacing.horizontalBig, inverted ? '\n            a {\n              color: ' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.primary) + ';\n            }\n          ' : '']]])
      }, _react2.default.createElement(_style2.default, {
        styleId: '2957026600',
        css: ['.__jsx-style-dynamic-selector{' + (inverted ? '\n            a {\n              color: ' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.primary) + ';\n            }\n          ' : '') + ';}', 'section.__jsx-style-dynamic-selector{background:' + (inverted ? _theme2.default.color.paperInverted : _theme2.default.color.paper) + ';color:' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.text) + ';margin:' + _theme2.default.spacing.verticalBig + 'px ' + _theme2.default.spacing.horizontalBig * -1 + 'px;padding:' + _theme2.default.spacing.verticalBig * 2 + 'px ' + _theme2.default.spacing.horizontalBig + 'px;}'],
        dynamic: [inverted ? _theme2.default.color.paperInverted : _theme2.default.color.paper, inverted ? _theme2.default.color.textInverted : _theme2.default.color.text, _theme2.default.spacing.verticalBig, _theme2.default.spacing.horizontalBig * -1, _theme2.default.spacing.verticalBig * 2, _theme2.default.spacing.horizontalBig, inverted ? '\n            a {\n              color: ' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.primary) + ';\n            }\n          ' : '']
      }), children);
    }
  }]);

  return Section;
}(_react.Component);

Section.defaultProps = {
  children: null,
  inverted: false
};
exports.default = Section;