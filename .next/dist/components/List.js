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

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);

    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headers = _props.headers,
          items = _props.items;

      return _react2.default.createElement('table', {
        className: 'jsx-3803297417'
      }, _react2.default.createElement(_style2.default, {
        styleId: '3803297417',
        css: ['table.jsx-3803297417{border-collapse:collapse;}', 'th.jsx-3803297417,td.jsx-3803297417{font-size:' + _theme2.default.font.size.textSmall + ';background-color:' + _theme2.default.color.paper + ';padding:' + _theme2.default.spacing.verticalSmall + 'px ' + _theme2.default.spacing.horizontalSmall + 'px;border-bottom:1px solid ' + _theme2.default.color.grey + ';}', 'th.jsx-3803297417{font-weight:' + _theme2.default.font.weight.text + ';font-color:' + _theme2.default.color.primary + ';text-align:left;vertical-align:bottom;border-bottom:2px solid ' + _theme2.default.color.grey + ';}']
      }), _react2.default.createElement('thead', {
        className: 'jsx-3803297417'
      }, _react2.default.createElement('tr', {
        className: 'jsx-3803297417'
      }, headers.map(function (header, headerIndex) {
        return _react2.default.createElement('th', { key: headerIndex, className: 'jsx-3803297417'
        }, header);
      }))), _react2.default.createElement('tbody', {
        className: 'jsx-3803297417'
      }, items.map(function (item, itemIndex) {
        return _react2.default.createElement('tr', { key: itemIndex, className: 'jsx-3803297417'
        }, item.map(function (column, columnIndex) {
          return _react2.default.createElement('td', { key: columnIndex, className: 'jsx-3803297417'
          }, column);
        }));
      })));
    }
  }]);

  return List;
}(_react.Component);

List.defaultProps = {
  headers: [],
  items: []
};
exports.default = List;