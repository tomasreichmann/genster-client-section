'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require('../constants/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Genster - klientská sekce' : _ref$title;
  return _react2.default.createElement('div', {
    className: 'jsx-2208369569'
  }, _react2.default.createElement(_style2.default, {
    styleId: '2208369569',
    css: ['.logo.jsx-2208369569{height:' + _theme2.default.font.size.text + ';}', 'nav.jsx-2208369569{margin:0 ' + _theme2.default.spacing.horizontal * -1 + 'px;}', 'nav.jsx-2208369569 a.jsx-2208369569{color:' + _theme2.default.color.textInverted + ';margin:0 ' + _theme2.default.spacing.horizontal + 'px;text-decoration:none;font-weight:' + _theme2.default.font.weight.navigation + ';display:inline-block;}', 'footer.jsx-2208369569{font-size:' + _theme2.default.font.size.textSmall + ';font-weight:' + _theme2.default.font.weight.light + ';text-align:center;}']
  }), _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
    className: 'jsx-2208369569'
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-2208369569'
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2208369569'
  })), _react2.default.createElement('header', {
    className: 'jsx-2208369569'
  }, _react2.default.createElement('nav', {
    className: 'jsx-2208369569'
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true }, _react2.default.createElement('a', {
    className: 'jsx-2208369569'
  }, _react2.default.createElement('img', { src: '/static/genster-logo.svg', className: 'jsx-2208369569' + ' ' + 'logo'
  }))), _react2.default.createElement(_link2.default, { href: '/boxy' }, _react2.default.createElement('a', {
    className: 'jsx-2208369569'
  }, 'Boxy')), _react2.default.createElement(_link2.default, { href: '/produkty' }, _react2.default.createElement('a', {
    className: 'jsx-2208369569'
  }, 'Produkty')), _react2.default.createElement(_link2.default, { href: '/chci-genster-box', prefetch: true }, _react2.default.createElement('a', {
    className: 'jsx-2208369569'
  }, 'Chci Genster Box')), _react2.default.createElement(_link2.default, { href: '/profil', prefetch: true }, _react2.default.createElement('a', {
    className: 'jsx-2208369569'
  }, 'Profil')), _react2.default.createElement(_link2.default, { href: '/odhlasit' }, _react2.default.createElement('a', {
    className: 'jsx-2208369569'
  }, 'Odhl\xE1sit')))), children, _react2.default.createElement('footer', {
    className: 'jsx-2208369569'
  }, 'Genster 2017'));
};

exports.default = Layout;