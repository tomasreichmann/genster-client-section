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

var _jsxFileName = '/Users/tomasreichmann/private/genster-client-section/components/List.js';


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
        className: 'jsx-3803297417',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3803297417',
        css: 'table.jsx-3803297417{border-collapse:collapse;}th.jsx-3803297417,td.jsx-3803297417{font-size:' + _theme2.default.font.size.textSmall + ';background-color:' + _theme2.default.color.paper + ';padding:' + _theme2.default.spacing.verticalSmall + 'px ' + _theme2.default.spacing.horizontalSmall + 'px;border-bottom:1px solid ' + _theme2.default.color.grey + ';}th.jsx-3803297417{font-weight:' + _theme2.default.font.weight.text + ';font-color:' + _theme2.default.color.primary + ';text-align:left;vertical-align:bottom;border-bottom:2px solid ' + _theme2.default.color.grey + ';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBR3NDLEFBR2MsQUFNRSx5QkFSM0MsY0FHZ0QsRUFNTix3Q0FDeEIsSUFOc0QsWUFPaEQsc0JBQytCLG9DQVBBLGlCQVF2RCxvQ0FQQSIsImZpbGUiOiJjb21wb25lbnRzL0xpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFzcmVpY2htYW5uL3ByaXZhdGUvZ2Vuc3Rlci1jbGllbnQtc2VjdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2NvbnN0YW50cy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhlYWRlcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWFkZXJzOiBbXSxcbiAgICBpdGVtczogW10sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGgsIHRkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemUudGV4dFNtYWxsfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3IucGFwZXJ9O1xuICAgICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nLnZlcnRpY2FsU21hbGx9cHggJHt0aGVtZS5zcGFjaW5nLmhvcml6b250YWxTbWFsbH1weDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC50ZXh0fTtcbiAgICAgICAgICAgIGZvbnQtY29sb3I6ICR7dGhlbWUuY29sb3IucHJpbWFyeX07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3RoZW1lLmNvbG9yLmdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge2hlYWRlcnMubWFwKCAoaGVhZGVyLCBoZWFkZXJJbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXJJbmRleH0+e2hlYWRlcn08L3RoPlxuICAgICAgICAgICAgKSApfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7aXRlbXMubWFwKCAoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHRyIGtleT17aXRlbUluZGV4fT57aXRlbS5tYXAoKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRkIGtleT17Y29sdW1uSW5kZXh9Pntjb2x1bW59PC90ZD5cbiAgICAgICAgICAgICkgKX08L3RyPlxuICAgICAgICAgIH0gKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/List.js */'
      }), _react2.default.createElement('thead', {
        className: 'jsx-3803297417',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('tr', {
        className: 'jsx-3803297417',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, headers.map(function (header, headerIndex) {
        return _react2.default.createElement('th', { key: headerIndex, className: 'jsx-3803297417',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, header);
      }))), _react2.default.createElement('tbody', {
        className: 'jsx-3803297417',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, items.map(function (item, itemIndex) {
        return _react2.default.createElement('tr', { key: itemIndex, className: 'jsx-3803297417',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, item.map(function (column, columnIndex) {
          return _react2.default.createElement('td', { key: columnIndex, className: 'jsx-3803297417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, column);
        }));
      })));
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  headers: _propTypes2.default.array,
  items: _propTypes2.default.array
};
List.defaultProps = {
  headers: [],
  items: []
};
exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInRoZW1lIiwiTGlzdCIsInByb3BzIiwiaGVhZGVycyIsIml0ZW1zIiwiZm9udCIsInNpemUiLCJ0ZXh0U21hbGwiLCJjb2xvciIsInBhcGVyIiwic3BhY2luZyIsInZlcnRpY2FsU21hbGwiLCJob3Jpem9udGFsU21hbGwiLCJncmV5Iiwid2VpZ2h0IiwidGV4dCIsInByaW1hcnkiLCJtYXAiLCJoZWFkZXIiLCJoZWFkZXJJbmRleCIsIml0ZW0iLCJpdGVtSW5kZXgiLCJjb2x1bW4iLCJjb2x1bW5JbmRleCIsInByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7Ozs7Ozs7O0lBRUcsQTs7Ozs7Ozs7Ozs7NkJBV1Y7bUJBQ29CLEtBRHBCLEFBQ3lCO1VBRHpCLEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1UsZUFEVixBQUNVLEFBQ2pCOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTsrR0FNbUIsZ0JBQUEsQUFBTSxLQUFOLEFBQVcsS0FOOUIsQUFNbUMsbUNBQ1QsZ0JBQUEsQUFBTSxNQVBoQyxBQU9zQyxzQkFDckIsZ0JBQUEsQUFBTSxRQVJ2QixBQVErQix3QkFBbUIsZ0JBQUEsQUFBTSxRQVJ4RCxBQVFnRSxrREFDL0IsZ0JBQUEsQUFBTSxNQVR2QyxBQVM2Qyw0Q0FHeEIsZ0JBQUEsQUFBTSxLQUFOLEFBQVcsT0FaaEMsQUFZdUMsd0JBQ25CLGdCQUFBLEFBQU0sTUFiMUIsQUFhZ0MsOEVBR0MsZ0JBQUEsQUFBTSxNQWhCdkMsQUFnQjZDLE9BaEI3QyxBQW1CRTtBQW5CRiwwQkFtQkUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxJQUFLLFVBQUEsQUFBQyxRQUFELEFBQVMsYUFBVDsrQkFDWixjQUFBLFFBQUksS0FBSixBQUFTLHdCQUFUOztzQkFBQTt3QkFBQSxBQUF1QjtBQUF2QjtTQUFBLEVBRFksQUFDWjtBQXRCUixBQW1CRSxBQUNFLEFBQ0csQUFLTCw0QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxlQUNHLEFBQU0sSUFBSyxVQUFBLEFBQUMsTUFBRCxBQUFPLFdBQWMsQUFDL0I7K0JBQU8sY0FBQSxRQUFJLEtBQUosQUFBUyxzQkFBVDs7c0JBQUE7d0JBQUEsQUFBcUI7QUFBckI7U0FBQSxPQUFxQixBQUFLLElBQUksVUFBQSxBQUFDLFFBQUQsQUFBUyxhQUFUO2lDQUNuQyxjQUFBLFFBQUksS0FBSixBQUFTLHdCQUFUOzt3QkFBQTswQkFBQSxBQUF1QjtBQUF2QjtXQUFBLEVBRG1DLEFBQ25DO0FBREYsQUFBTyxBQUFxQixBQUc3QjtBQWhDUCxBQUNFLEFBMEJFLEFBQ0csQUFRUjs7Ozs7QUFqRCtCLEE7O0EsQUFBYixLQUNaLEE7V0FDSSxvQkFEUSxBQUNFLEFBQ25CO1NBQU8sb0JBRlUsQUFFQSxBO0FBRkEsQUFDakI7QUFGaUIsQSxLQU1aLEE7V0FBZSxBQUNYLEFBQ1Q7U0FGb0IsQUFFYixBO0FBRmEsQUFDcEI7a0JBUGlCLEEiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYXNyZWljaG1hbm4vcHJpdmF0ZS9nZW5zdGVyLWNsaWVudC1zZWN0aW9uIn0=