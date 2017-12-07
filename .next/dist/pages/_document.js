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

var _jsxFileName = '/Users/tomasreichmann/private/genster-client-section/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'cs', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2615136331',
        css: '@font-face{font-family:Genster-Montserrat;font-style:normal;font-weight:100;src:url(/static/fonts/montserrat-100.eot);src:url(/static/fonts/montserrat-100.woff2) format("woff2"),url(/static/fonts/montserrat-100.woff) format("woff"),url(/static/fonts/montserrat-100.ttf) format("truetype");}@font-face{font-family:Genster-Montserrat;font-style:normal;font-weight:300;src:url(/static/fonts/montserrat-300.eot);src:url(/static/fonts/montserrat-300.woff2) format("woff2"),url(/static/fonts/montserrat-300.woff) format("woff"),url(/static/fonts/montserrat-300.ttf) format("truetype");}@font-face{font-family:Genster-Montserrat;font-style:normal;font-weight:500;src:url(/static/fonts/montserrat-500.eot);src:url(/static/fonts/montserrat-500.woff2) format("woff2"),url(/static/fonts/montserrat-500.woff) format("woff"),url(/static/fonts/montserrat-500.ttf) format("truetype");}body{background:' + _theme2.default.color.paperInverted + ';font-family:' + _theme2.default.font.text + ';font-size:' + _theme2.default.font.size.text + ';font-weight:' + _theme2.default.font.weight.text + ';color:' + _theme2.default.color.textInverted + ';margin:0;padding:0;}.title{font-family:' + _theme2.default.font.text + ';font-size:' + _theme2.default.font.size.title + ';font-weight:' + _theme2.default.font.weight.title + ';color:' + _theme2.default.color.textInverted + ';}h1{font-family:' + _theme2.default.font.text + ';font-size:' + _theme2.default.font.size.heading + ';font-weight:' + _theme2.default.font.weight.heading + ';color:' + _theme2.default.color.primary + ';}.page{padding:' + _theme2.default.spacing.horizontalBig + 'px ' + _theme2.default.spacing.verticalBig + 'px;}@media all and (min-width:' + _theme2.default.responsive.desktop + '){.page{width:' + _theme2.default.responsive.desktop + ';margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlMkIsQUFHNEMsQUFRQSxBQVFBLEFBUVMsQUFVQyxBQU9BLEFBTytCLEFBS2xDLCtCQXBEcEIsQUFRQSxBQVFBLEtBcUNGLElBN0J5QixDQVVGLEFBT0MsUUF4Q3hCLEFBUUEsQUFRQSxDQXFDaEIsZUFwRDBDLEFBUUEsQUFRQSxPQThCNUMsUUFiMkMsQ0FWRixBQWlCRywwQkF0QzdDLEFBUUEsQUFRQSxhQU00QyxDQVVOLEVBT0MsaUNBTnRDLEdBT0EsRUFqQnFDLG1DQUMxQixTQUNDLFVBQ1osK0RBMUJBLEFBUUEsQUFRQSIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFzcmVpY2htYW5uL3ByaXZhdGUvZ2Vuc3Rlci1jbGllbnQtc2VjdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2NvbnN0YW50cy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7IGh0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzIH0gPSByZW5kZXJQYWdlKCk7XG4gICAgY29uc3Qgc3R5bGVzID0gZmx1c2goKTtcbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rcywgc3R5bGVzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGxhbmc9XCJjc1wiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW5zdGVyLU1vbnRzZXJyYXQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgc3JjOiB1cmwoL3N0YXRpYy9mb250cy9tb250c2VycmF0LTEwMC5lb3QpO1xuICAgICAgICAgICAgc3JjOiB1cmwoL3N0YXRpYy9mb250cy9tb250c2VycmF0LTEwMC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksdXJsKC9zdGF0aWMvZm9udHMvbW9udHNlcnJhdC0xMDAud29mZikgZm9ybWF0KFwid29mZlwiKSx1cmwoL3N0YXRpYy9mb250cy9tb250c2VycmF0LTEwMC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogR2Vuc3Rlci1Nb250c2VycmF0O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIHNyYzogdXJsKC9zdGF0aWMvZm9udHMvbW9udHNlcnJhdC0zMDAuZW90KTtcbiAgICAgICAgICAgIHNyYzogdXJsKC9zdGF0aWMvZm9udHMvbW9udHNlcnJhdC0zMDAud29mZjIpIGZvcm1hdChcIndvZmYyXCIpLHVybCgvc3RhdGljL2ZvbnRzL21vbnRzZXJyYXQtMzAwLndvZmYpIGZvcm1hdChcIndvZmZcIiksdXJsKC9zdGF0aWMvZm9udHMvbW9udHNlcnJhdC0zMDAudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdlbnN0ZXItTW9udHNlcnJhdDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBzcmM6IHVybCgvc3RhdGljL2ZvbnRzL21vbnRzZXJyYXQtNTAwLmVvdCk7XG4gICAgICAgICAgICBzcmM6IHVybCgvc3RhdGljL2ZvbnRzL21vbnRzZXJyYXQtNTAwLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoL3N0YXRpYy9mb250cy9tb250c2VycmF0LTUwMC53b2ZmKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybCgvc3RhdGljL2ZvbnRzL21vbnRzZXJyYXQtNTAwLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3IucGFwZXJJbnZlcnRlZH07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LnRleHR9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZS50ZXh0fTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnQud2VpZ2h0LnRleHR9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3IudGV4dEludmVydGVkfTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQudGV4dH07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplLnRpdGxlfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnQud2VpZ2h0LnRpdGxlfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9yLnRleHRJbnZlcnRlZH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC50ZXh0fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemUuaGVhZGluZ307XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC5oZWFkaW5nfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZy5ob3Jpem9udGFsQmlnfXB4ICR7dGhlbWUuc3BhY2luZy52ZXJ0aWNhbEJpZ31weDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUuZGVza3RvcH0pIHtcbiAgICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZS5kZXNrdG9wfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCIgPlxuICAgICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/_document.js?entry */'
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('div', { className: 'page', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwidGhlbWUiLCJNeURvY3VtZW50IiwiY29sb3IiLCJwYXBlckludmVydGVkIiwiZm9udCIsInRleHQiLCJzaXplIiwid2VpZ2h0IiwidGV4dEludmVydGVkIiwidGl0bGUiLCJoZWFkaW5nIiwicHJpbWFyeSIsInNwYWNpbmciLCJob3Jpem9udGFsQmlnIiwidmVydGljYWxCaWciLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsInJlbmRlclBhZ2UiLCJodG1sIiwiaGVhZCIsImVycm9ySHRtbCIsImNodW5rcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7Ozs7Ozs7O0ksQUFFRzs7Ozs7Ozs7Ozs7NkJBT1YsQUFDUDs2QkFDRSxjQUFBLFVBQU0sTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQTtpQkFBQTt3NEJBMkJrQixnQkFBQSxBQUFNLE1BM0J4QixBQTJCOEIsa0NBQ1gsZ0JBQUEsQUFBTSxLQTVCekIsQUE0QjhCLHVCQUNiLGdCQUFBLEFBQU0sS0FBTixBQUFXLEtBN0I1QixBQTZCaUMseUJBQ2QsZ0JBQUEsQUFBTSxLQUFOLEFBQVcsT0E5QjlCLEFBOEJxQyxtQkFDeEIsZ0JBQUEsQUFBTSxNQS9CbkIsQUErQnlCLDREQU1OLGdCQUFBLEFBQU0sS0FyQ3pCLEFBcUM4Qix1QkFDYixnQkFBQSxBQUFNLEtBQU4sQUFBVyxLQXRDNUIsQUFzQ2lDLDBCQUNkLGdCQUFBLEFBQU0sS0FBTixBQUFXLE9BdkM5QixBQXVDcUMsb0JBQ3hCLGdCQUFBLEFBQU0sTUF4Q25CLEFBd0N5QixxQ0FJTixnQkFBQSxBQUFNLEtBNUN6QixBQTRDOEIsdUJBQ2IsZ0JBQUEsQUFBTSxLQUFOLEFBQVcsS0E3QzVCLEFBNkNpQyw0QkFDZCxnQkFBQSxBQUFNLEtBQU4sQUFBVyxPQTlDOUIsQUE4Q3FDLHNCQUN4QixnQkFBQSxBQUFNLE1BL0NuQixBQStDeUIsK0JBSVYsZ0JBQUEsQUFBTSxRQW5EckIsQUFtRDZCLHdCQUFtQixnQkFBQSxBQUFNLFFBbkR0RCxBQW1EOEQsaURBRy9CLGdCQUFBLEFBQU0sV0F0RHJDLEFBc0RnRCw2QkFFakMsZ0JBQUEsQUFBTSxXQXhEckIsQUF3RGdDLFVBekRsQyxBQUNFLEFBOERBO0FBOURBLDJCQThEQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFO0FBQUEsMkJBRUYsQUFBQzs7b0JBQUQ7c0JBcEVOLEFBQ0UsQUErREUsQUFJRSxBQUlQO0FBSk87QUFBQTs7OzswQ0EzRStCO1VBQWQsQUFBYyxrQkFBZCxBQUFjOzt3QkFBQSxBQUNLO1VBREwsQUFDN0IsbUJBRDZCLEFBQzdCO1VBRDZCLEFBQ3ZCLG1CQUR1QixBQUN2QjtVQUR1QixBQUNqQix3QkFEaUIsQUFDakI7VUFEaUIsQUFDTixxQkFETSxBQUNOLEFBQy9COztVQUFNLFNBQU4sQUFBZSxBQUNmO2FBQU8sRUFBRSxNQUFGLE1BQVEsTUFBUixNQUFjLFdBQWQsV0FBeUIsUUFBekIsUUFBaUMsUUFBeEMsQUFBTyxBQUNSOzs7OztBQUxxQyxBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFzcmVpY2htYW5uL3ByaXZhdGUvZ2Vuc3Rlci1jbGllbnQtc2VjdGlvbiJ9