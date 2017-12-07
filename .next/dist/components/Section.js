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

var _jsxFileName = '/Users/tomasreichmann/private/genster-client-section/components/Section.js';


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
        className: _style2.default.dynamic([['2957026600', [inverted ? _theme2.default.color.paperInverted : _theme2.default.color.paper, inverted ? _theme2.default.color.textInverted : _theme2.default.color.text, _theme2.default.spacing.verticalBig, _theme2.default.spacing.horizontalBig * -1, _theme2.default.spacing.verticalBig * 2, _theme2.default.spacing.horizontalBig, inverted ? '\n            a {\n              color: ' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.primary) + ';\n            }\n          ' : '']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2957026600',
        css: '.__jsx-style-dynamic-selector{' + (inverted ? '\n            a {\n              color: ' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.primary) + ';\n            }\n          ' : '') + ';}section.__jsx-style-dynamic-selector{background:' + (inverted ? _theme2.default.color.paperInverted : _theme2.default.color.paper) + ';color:' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.text) + ';margin:' + _theme2.default.spacing.verticalBig + 'px ' + _theme2.default.spacing.horizontalBig * -1 + 'px;padding:' + _theme2.default.spacing.verticalBig * 2 + 'px ' + _theme2.default.spacing.horizontalBig + 'px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBR3FELEFBS2QsNkJBQzlCLFdBTHVDLG1DQUNrQyxxRUFDQyxzRUFDeEUiLCJmaWxlIjoiY29tcG9uZW50cy9TZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hc3JlaWNobWFubi9wcml2YXRlL2dlbnN0ZXItY2xpZW50LXNlY3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9jb25zdGFudHMvdGhlbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBpbnZlcnRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGludmVydGVkOiBmYWxzZSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpbnZlcnRlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7aW52ZXJ0ZWQgPyB0aGVtZS5jb2xvci5wYXBlckludmVydGVkIDogdGhlbWUuY29sb3IucGFwZXJ9O1xuICAgICAgICAgICAgY29sb3I6ICR7aW52ZXJ0ZWQgPyB0aGVtZS5jb2xvci50ZXh0SW52ZXJ0ZWQgOiB0aGVtZS5jb2xvci50ZXh0fTtcbiAgICAgICAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nLnZlcnRpY2FsQmlnfXB4ICR7dGhlbWUuc3BhY2luZy5ob3Jpem9udGFsQmlnICogLTF9cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcudmVydGljYWxCaWcqMn1weCAke3RoZW1lLnNwYWNpbmcuaG9yaXpvbnRhbEJpZ31weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtpbnZlcnRlZCA/IGBcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogJHtpbnZlcnRlZCA/IHRoZW1lLmNvbG9yLnRleHRJbnZlcnRlZCA6IHRoZW1lLmNvbG9yLnByaW1hcnl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGAgOiAnJ307XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Section.js */',
        dynamic: [inverted ? _theme2.default.color.paperInverted : _theme2.default.color.paper, inverted ? _theme2.default.color.textInverted : _theme2.default.color.text, _theme2.default.spacing.verticalBig, _theme2.default.spacing.horizontalBig * -1, _theme2.default.spacing.verticalBig * 2, _theme2.default.spacing.horizontalBig, inverted ? '\n            a {\n              color: ' + (inverted ? _theme2.default.color.textInverted : _theme2.default.color.primary) + ';\n            }\n          ' : '']
      }), children);
    }
  }]);

  return Section;
}(_react.Component);

Section.propTypes = {
  children: _propTypes2.default.any,
  inverted: _propTypes2.default.bool
};
Section.defaultProps = {
  children: null,
  inverted: false
};
exports.default = Section;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInRoZW1lIiwiU2VjdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJpbnZlcnRlZCIsImNvbG9yIiwicGFwZXJJbnZlcnRlZCIsInBhcGVyIiwidGV4dEludmVydGVkIiwidGV4dCIsInNwYWNpbmciLCJ2ZXJ0aWNhbEJpZyIsImhvcml6b250YWxCaWciLCJwcmltYXJ5IiwicHJvcFR5cGVzIiwiYW55IiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7OztJLEFBRUc7Ozs7Ozs7Ozs7OzZCQVdWO21CQUN3QixLQUR4QixBQUM2QjtVQUQ3QixBQUNDLGtCQURELEFBQ0M7VUFERCxBQUNXLGtCQURYLEFBQ1csQUFDbEI7OzZCQUNFLGNBQUE7NERBR29CLFdBQVcsZ0JBQUEsQUFBTSxNQUFqQixBQUF1QixnQkFBZ0IsZ0JBQUEsQUFBTSxNQUhqRSxBQUd1RSxPQUN4RCxXQUFXLGdCQUFBLEFBQU0sTUFBakIsQUFBdUIsZUFBZSxnQkFBQSxBQUFNLE1BSjNELEFBSWlFLE1BQ2pELGdCQUFBLEFBQU0sUUFMdEIsQUFLOEIsYUFBaUIsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsZ0JBQWdCLENBTDdFLEFBSzhFLEdBQzdELGdCQUFBLEFBQU0sUUFBTixBQUFjLGNBTi9CLEFBTTJDLEdBQU8sZ0JBQUEsQUFBTSxRQU54RCxBQU1nRSxlQUUxRCx5REFFVyxXQUFXLGdCQUFBLEFBQU0sTUFBakIsQUFBdUIsZUFBZSxnQkFBQSxBQUFNLE1BRnZELEFBRTZELDRDQVZuRSxBQVlROztvQkFaUjtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTtpREFRTSx5REFFVyxXQUFXLGdCQUFBLEFBQU0sTUFBakIsQUFBdUIsZUFBZSxnQkFBQSxBQUFNLE1BRnZELEFBRTZELDRDQVZuRSxBQVlRLDhEQVRZLFdBQVcsZ0JBQUEsQUFBTSxNQUFqQixBQUF1QixnQkFBZ0IsZ0JBQUEsQUFBTSxNQUhqRSxBQUd1RSxzQkFDeEQsV0FBVyxnQkFBQSxBQUFNLE1BQWpCLEFBQXVCLGVBQWUsZ0JBQUEsQUFBTSxNQUozRCxBQUlpRSxxQkFDakQsZ0JBQUEsQUFBTSxRQUx0QixBQUs4QixzQkFBaUIsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsZ0JBQWdCLENBTDdFLEFBSzhFLG9CQUM3RCxnQkFBQSxBQUFNLFFBQU4sQUFBYyxjQU4vQixBQU0yQyxZQUFPLGdCQUFBLEFBQU0sUUFOeEQsQUFNZ0UsZ0JBTmhFO2tCQUdvQixXQUFXLGdCQUFBLEFBQU0sTUFBakIsQUFBdUIsZ0JBQWdCLGdCQUFBLEFBQU0sTUFIakUsQUFHdUUsT0FDeEQsV0FBVyxnQkFBQSxBQUFNLE1BQWpCLEFBQXVCLGVBQWUsZ0JBQUEsQUFBTSxNQUozRCxBQUlpRSxNQUNqRCxnQkFBQSxBQUFNLFFBTHRCLEFBSzhCLGFBQWlCLGdCQUFBLEFBQU0sUUFBTixBQUFjLGdCQUFnQixDQUw3RSxBQUs4RSxHQUM3RCxnQkFBQSxBQUFNLFFBQU4sQUFBYyxjQU4vQixBQU0yQyxHQUFPLGdCQUFBLEFBQU0sUUFOeEQsQUFNZ0UsZUFFMUQseURBRVcsV0FBVyxnQkFBQSxBQUFNLE1BQWpCLEFBQXVCLGVBQWUsZ0JBQUEsQUFBTSxNQUZ2RCxBQUU2RCw0Q0FWbkUsQUFZUSxBQUVMO0FBZEgsVUFERixBQUNFLEFBaUJIOzs7OztBQS9Ca0MsQTs7QSxBQUFoQixRQUNaLEE7WUFDSyxvQkFETyxBQUNHLEFBQ3BCO1lBQVUsb0IsQUFGTyxBQUVHO0FBRkgsQUFDakI7QUFGaUIsQSxRQU1aLEE7WUFBZSxBQUNWLEFBQ1Y7WUFGb0IsQUFFVixBO0FBRlUsQUFDcEI7a0JBUGlCLEEiLCJmaWxlIjoiU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYXNyZWljaG1hbm4vcHJpdmF0ZS9nZW5zdGVyLWNsaWVudC1zZWN0aW9uIn0=