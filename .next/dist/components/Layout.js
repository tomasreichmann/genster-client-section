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

var _jsxFileName = '/Users/tomasreichmann/private/genster-client-section/components/Layout.js';


var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Genster - klientská sekce' : _ref$title;
  return _react2.default.createElement('div', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '2208369569',
    css: '.logo.jsx-2208369569{height:' + _theme2.default.font.size.text + ';}nav.jsx-2208369569{margin:0 ' + _theme2.default.spacing.horizontal * -1 + 'px;}nav.jsx-2208369569 a.jsx-2208369569{color:' + _theme2.default.color.textInverted + ';margin:0 ' + _theme2.default.spacing.horizontal + 'px;text-decoration:none;font-weight:' + _theme2.default.font.weight.navigation + ';display:inline-block;}footer.jsx-2208369569{font-size:' + _theme2.default.font.size.textSmall + ';font-weight:' + _theme2.default.font.weight.light + ';text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUc2QyxBQUdJLEFBR0wsQUFPSSxtQ0FOQyxDQU4xQyxHQWEyQyxDQVYzQyxtQ0FJdUIsS0FPSCxnQkFOdUIsRUFPM0MsdUNBTnVCLHFCQUN2QiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYXNyZWljaG1hbm4vcHJpdmF0ZS9nZW5zdGVyLWNsaWVudC1zZWN0aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2NvbnN0YW50cy90aGVtZSdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0dlbnN0ZXIgLSBrbGllbnRza8OhIHNla2NlJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6ICR7dGhlbWUuZm9udC5zaXplLnRleHR9O1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZy5ob3Jpem9udGFsICogLTF9cHg7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9yLnRleHRJbnZlcnRlZH07XG4gICAgICAgIG1hcmdpbjogMCAke3RoZW1lLnNwYWNpbmcuaG9yaXpvbnRhbH1weDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC5uYXZpZ2F0aW9ufTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZS50ZXh0U21hbGx9O1xuICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC5saWdodH07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj0nLycgcHJlZmV0Y2g+PGE+PGltZyBzcmM9XCIvc3RhdGljL2dlbnN0ZXItbG9nby5zdmdcIiBjbGFzc05hbWU9XCJsb2dvXCIgLz48L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvYm94eSc+PGE+Qm94eTwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9kdWt0eSc+PGE+UHJvZHVrdHk8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvY2hjaS1nZW5zdGVyLWJveCcgcHJlZmV0Y2g+PGE+Q2hjaSBHZW5zdGVyIEJveDwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9maWwnIHByZWZldGNoPjxhPlByb2ZpbDwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9vZGhsYXNpdCc+PGE+T2RobMOhc2l0PC9hPjwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAge2NoaWxkcmVufVxuXG4gICAgPGZvb3Rlcj5HZW5zdGVyIDIwMTc8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4pO1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=components/Layout.js */'
  }), _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), _react2.default.createElement('header', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('nav', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('img', { src: '/static/genster-logo.svg', className: 'jsx-2208369569' + ' ' + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }))), _react2.default.createElement(_link2.default, { href: '/boxy', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Boxy')), _react2.default.createElement(_link2.default, { href: '/produkty', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Produkty')), _react2.default.createElement(_link2.default, { href: '/chci-genster-box', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'Chci Genster Box')), _react2.default.createElement(_link2.default, { href: '/profil', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'Profil')), _react2.default.createElement(_link2.default, { href: '/odhlasit', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Odhl\xE1sit')))), children, _react2.default.createElement('footer', {
    className: 'jsx-2208369569',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Genster 2017'));
};

Layout.propTypes = {
  children: _propTypes2.default.any.isRequired,
  title: _propTypes2.default.string
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiUHJvcFR5cGVzIiwidGhlbWUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZm9udCIsInNpemUiLCJ0ZXh0Iiwic3BhY2luZyIsImhvcml6b250YWwiLCJjb2xvciIsInRleHRJbnZlcnRlZCIsIndlaWdodCIsIm5hdmlnYXRpb24iLCJ0ZXh0U21hbGwiLCJsaWdodCIsInByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7Ozs7Ozs7QUFFbEIsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3dCQUFILEFBQWE7TUFBYixBQUFhLG1DQUFiLEFBQXFCLDhCQUFyQjt5QkFDYixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxHQUFBO2FBQUE7MENBR2dCLGdCQUFBLEFBQU0sS0FBTixBQUFXLEtBSDNCLEFBR2dDLDBDQUdkLGdCQUFBLEFBQU0sUUFBTixBQUFjLGFBQWEsQ0FON0MsQUFNOEMsdURBRy9CLGdCQUFBLEFBQU0sTUFUckIsQUFTMkIsOEJBQ1QsZ0JBQUEsQUFBTSxRQVZ4QixBQVVnQyxzREFFWCxnQkFBQSxBQUFNLEtBQU4sQUFBVyxPQVpoQyxBQVl1Qyx5RUFJcEIsZ0JBQUEsQUFBTSxLQUFOLEFBQVcsS0FoQjlCLEFBZ0JtQyw4QkFDZCxnQkFBQSxBQUFNLEtBQU4sQUFBVyxPQWpCaEMsQUFpQnVDLFFBakJ2QyxBQXFCRTtBQXJCRixzQkFxQkUsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFRO0FBQVI7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBTSxTQUFOLEFBQWMsb0JBQWQ7O2dCQUFBO2tCQUZGLEFBRUUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7Z0JBQUE7a0JBeEJKLEFBcUJFLEFBR0UsQUFFRjtBQUZFO3VCQUVGLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxLQUFJLFVBQWY7Z0JBQUE7a0JBQUEsQUFBd0I7QUFBeEI7cUJBQXdCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBRztBQUFIO0FBQUEsNENBQVEsS0FBTCxBQUFTLGdFQUFULEFBQThDOztnQkFBOUM7a0JBRDdCLEFBQ0UsQUFBd0IsQUFBRyxBQUMzQjtBQUQyQjt3QkFDM0IsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFBbUI7QUFBbkI7cUJBQW1CLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRnJCLEFBRUUsQUFBbUIsQUFDbkIsMEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFBdUI7QUFBdkI7cUJBQXVCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSHpCLEFBR0UsQUFBdUIsQUFDdkIsOEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVcscUJBQW9CLFVBQS9CO2dCQUFBO2tCQUFBLEFBQXdDO0FBQXhDO3FCQUF3QyxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUoxQyxBQUlFLEFBQXdDLEFBQ3hDLHNDQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXLFdBQVUsVUFBckI7Z0JBQUE7a0JBQUEsQUFBOEI7QUFBOUI7cUJBQThCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBTGhDLEFBS0UsQUFBOEIsQUFDOUIsNEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFBdUI7QUFBdkI7cUJBQXVCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBakM3QixBQTBCRSxBQUNFLEFBTUUsQUFBdUIsQUFJMUIsbUJBckNILEFBdUNFLDBCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBeENXLEFBQ2IsQUF1Q0U7QUF4Q0o7O0FBNENBLE9BQUEsQUFBTztZQUNLLG9CQUFBLEFBQVUsSUFESCxBQUNPLEFBQ3hCO1NBQU8sb0JBRlQsQUFBbUIsQUFFQSxBQUduQjtBQUxtQixBQUNqQjs7a0JBSUYsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFzcmVpY2htYW5uL3ByaXZhdGUvZ2Vuc3Rlci1jbGllbnQtc2VjdGlvbiJ9