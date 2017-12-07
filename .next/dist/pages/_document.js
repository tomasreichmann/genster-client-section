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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _theme = require('../constants/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'cs' }, _react2.default.createElement(_document.Head, null, _react2.default.createElement(_style2.default, {
        styleId: '2615136331',
        css: ['@font-face{font-family:Genster-Montserrat;font-style:normal;font-weight:100;src:url(/static/fonts/montserrat-100.eot);src:url(/static/fonts/montserrat-100.woff2) format("woff2"),url(/static/fonts/montserrat-100.woff) format("woff"),url(/static/fonts/montserrat-100.ttf) format("truetype");}', '@font-face{font-family:Genster-Montserrat;font-style:normal;font-weight:300;src:url(/static/fonts/montserrat-300.eot);src:url(/static/fonts/montserrat-300.woff2) format("woff2"),url(/static/fonts/montserrat-300.woff) format("woff"),url(/static/fonts/montserrat-300.ttf) format("truetype");}', '@font-face{font-family:Genster-Montserrat;font-style:normal;font-weight:500;src:url(/static/fonts/montserrat-500.eot);src:url(/static/fonts/montserrat-500.woff2) format("woff2"),url(/static/fonts/montserrat-500.woff) format("woff"),url(/static/fonts/montserrat-500.ttf) format("truetype");}', 'body{background:' + _theme2.default.color.paperInverted + ';font-family:' + _theme2.default.font.text + ';font-size:' + _theme2.default.font.size.text + ';font-weight:' + _theme2.default.font.weight.text + ';color:' + _theme2.default.color.textInverted + ';margin:0;padding:0;}', '.title{font-family:' + _theme2.default.font.text + ';font-size:' + _theme2.default.font.size.title + ';font-weight:' + _theme2.default.font.weight.title + ';color:' + _theme2.default.color.textInverted + ';}', 'h1{font-family:' + _theme2.default.font.text + ';font-size:' + _theme2.default.font.size.heading + ';font-weight:' + _theme2.default.font.weight.heading + ';color:' + _theme2.default.color.primary + ';}', '.page{padding:' + _theme2.default.spacing.horizontalBig + 'px ' + _theme2.default.spacing.verticalBig + 'px;}', '@media all and (min-width:' + _theme2.default.responsive.desktop + '){.page{width:' + _theme2.default.responsive.desktop + ';margin:0 auto;}}']
      })), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'page' }, _react2.default.createElement(_document.Main, null)), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;