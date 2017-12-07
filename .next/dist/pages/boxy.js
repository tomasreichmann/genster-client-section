'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Section = require('../components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _List = require('../components/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomasreichmann/private/genster-client-section/pages/boxy.js?entry';


var Boxy = function (_React$Component) {
  (0, _inherits3.default)(Boxy, _React$Component);

  function Boxy() {
    (0, _classCallCheck3.default)(this, Boxy);

    return (0, _possibleConstructorReturn3.default)(this, (Boxy.__proto__ || (0, _getPrototypeOf2.default)(Boxy)).apply(this, arguments));
  }

  (0, _createClass3.default)(Boxy, [{
    key: 'render',
    value: function render() {
      var _props$boxes = this.props.boxes,
          boxes = _props$boxes === undefined ? [] : _props$boxes;

      var listProps = {
        headers: ['Číslo objednávky', // Order number
        'Datum objednání', // Date requested
        'Datum odeslání', // Date shipped
        'Datum vrácení', // Date returned
        'Produktů', // Product count
        'Celková cena', // Total price
        'Faktura'],
        items: boxes.map(function (box) {
          return [_react2.default.createElement(_link2.default, { key: 'box-detail-' + box.id, href: '/box/' + box.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }, box.id)), // Order number
          box.requested ? new Date(box.requested).toLocaleString() : '', // Date requested
          box.shipped ? new Date(box.shipped).toLocaleString() : '', // Date shipped
          box.returned ? new Date(box.returned).toLocaleString() : '', // Date returned
          box.products.length, // Product count
          box.products.reduce(function (totalPrice, product) {
            return totalPrice + product.price;
          }, 0) + ' Kč', // Total price
          _react2.default.createElement(_link2.default, { key: 'box-invoice-' + box.id, href: /faktury/ + box.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          }, 'Faktura'))];
        } // Invoice
        )
      };

      return _react2.default.createElement(_Layout2.default, { title: 'Moje Genster Boxy', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_Section2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'Moje Genster Boxy'), _react2.default.createElement(_List2.default, (0, _extends3.default)({}, listProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var mockData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line no-undef
                // const res = await fetch('https://api.github.com/repos/zeit/next.js')
                // const json = await res.json()

                mockData = [{
                  id: 1,
                  requested: 1512602007116, // Date requested
                  shipped: 1512602107116, // Date shipped
                  returned: 1512602207116, // Date returned
                  products: [// products
                  {
                    pictures: ['http://l.yimg.com/cd/resizer/2.0/original/QbtSsFr0phAmjDR8mWql9vd80qc'],
                    name: 'Spodky',
                    brand: 'CK',
                    properties: [{
                      type: 'size',
                      value: 'XL'
                    }, {
                      type: 'color',
                      value: 'white'
                    }],
                    price: 1000,
                    isReturned: false,
                    feedback: {
                      style: 4,
                      fit: 4,
                      size: 4,
                      price: 2,
                      comments: 'Nejlepší spodky ever!'
                    }
                  }, {
                    pictures: ['https://static.bezvasport.cz/files/6/f/6f1516_64319193_o.jpg_532x532_f_ffffff.jpg'],
                    name: 'Jeans pánské',
                    brand: 'Lee Cooper',
                    properties: [{
                      type: 'size',
                      value: '38W R'
                    }, {
                      type: 'fit',
                      value: 'regular'
                    }, {
                      type: 'color',
                      value: 'black'
                    }],
                    price: 699,
                    isReturned: true,
                    feedback: {
                      style: 2,
                      fit: 2,
                      size: 4,
                      price: 3,
                      comments: 'Meh...'
                    }
                  }]
                }];
                return _context.abrupt('return', { boxes: mockData });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Boxy;
}(_react2.default.Component);

Boxy.propTypes = {
  boxes: _propTypes2.default.array
};
Boxy.defaultProps = {
  boxes: []
};
exports.default = Boxy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JveHkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiUHJvcFR5cGVzIiwiTGF5b3V0IiwiU2VjdGlvbiIsIkxpc3QiLCJCb3h5IiwicHJvcHMiLCJib3hlcyIsImxpc3RQcm9wcyIsImhlYWRlcnMiLCJpdGVtcyIsIm1hcCIsImJveCIsImlkIiwicmVxdWVzdGVkIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic2hpcHBlZCIsInJldHVybmVkIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJyZWR1Y2UiLCJ0b3RhbFByaWNlIiwicHJvZHVjdCIsInByaWNlIiwibW9ja0RhdGEiLCJwaWN0dXJlcyIsIm5hbWUiLCJicmFuZCIsInByb3BlcnRpZXMiLCJ0eXBlIiwidmFsdWUiLCJpc1JldHVybmVkIiwiZmVlZGJhY2siLCJzdHlsZSIsImZpdCIsInNpemUiLCJjb21tZW50cyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVJOzs7Ozs7Ozs7Ozs2QkErRVY7eUJBQ2dCLEtBRGhCLEFBQ3FCLE1BRHJCLEFBQ0M7VUFERCxBQUNDLHFDQURELEFBQ1MsS0FDaEI7O1VBQU07aUJBQ0ssQ0FBQSxBQUNQLG9CQUFvQixBQUNwQjtBQUZPLDJCQUVZLEFBQ25CO0FBSE8sMEJBR1UsQUFDakI7QUFKTyx5QkFJUyxBQUNoQjtBQUxPLG9CQUtJLEFBQ1g7QUFOTyx3QkFNUSxBQUNmO0FBUmMsQUFDUCxBQVNUO3FCQUFPLEFBQU0sSUFBSyxlQUFPLEFBQ3ZCO2lCQUFPLGlCQUNMLEFBQUMsZ0NBQUssS0FBSyxnQkFBZ0IsSUFBM0IsQUFBK0IsSUFBSSxNQUFNLFVBQVUsSUFBbkQsQUFBdUQ7d0JBQXZEOzBCQUFBLEFBQTREO0FBQTVEO1dBQUEsa0JBQTRELGNBQUE7O3dCQUFBOzBCQUFBLEFBQUk7QUFBSjtBQUFBLGlCQUR2RCxBQUNMLEFBQTRELEFBQVEsTUFBZ0IsQUFDcEY7Y0FBQSxBQUFJLFlBQVksSUFBQSxBQUFJLEtBQUssSUFBVCxBQUFhLFdBQTdCLEFBQWdCLEFBQXdCLG1CQUZuQyxBQUVzRCxJQUFJLEFBQy9EO2NBQUEsQUFBSSxVQUFVLElBQUEsQUFBSSxLQUFLLElBQVQsQUFBYSxTQUEzQixBQUFjLEFBQXNCLG1CQUgvQixBQUdrRCxJQUFJLEFBQzNEO2NBQUEsQUFBSSxXQUFXLElBQUEsQUFBSSxLQUFLLElBQVQsQUFBYSxVQUE1QixBQUFlLEFBQXVCLG1CQUpqQyxBQUlvRCxJQUFJLEFBQzdEO2NBQUEsQUFBSSxTQUxDLEFBS1EsUUFBUSxBQUNyQjtjQUFBLEFBQUksU0FBSixBQUFhLE9BQVEsVUFBQSxBQUFDLFlBQUQsQUFBYSxTQUFiO21CQUEwQixhQUFhLFFBQXZDLEFBQStDO0FBQXBFLGFBQUEsQUFBNEUsS0FOdkUsQUFNNkUsT0FBTyxBQUN6RjswQkFBQSxBQUFDLGdDQUFLLEtBQUssaUJBQWlCLElBQTVCLEFBQWdDLElBQUksTUFBTSxZQUFZLElBQXRELEFBQTBEO3dCQUExRDswQkFBQSxBQUErRDtBQUEvRDs2QkFBK0QsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBUGpFLEFBQU8sQUFPTCxBQUErRCxBQUVsRTtBQVZNLFVBVlQsQUFBa0IsQUFVVCxBQVFtRixBQUs1RjtBQWJTO0FBVlMsQUFDaEI7OzZCQXNCSyxBQUFDLGtDQUFPLE9BQVIsQUFBYztvQkFBZDtzQkFBQSxBQUNMO0FBREs7T0FBQSxrQkFDTCxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0NBQUEsQUFBQyx5REFBRCxBQUFVOztvQkFBVjtzQkFISixBQUFPLEFBQ0wsQUFFRSxBQUdMO0FBSEs7QUFBQTs7Ozs7Ozs7OzttQkFqR0o7QUFDQTtBQUNBO0FBRU07O0E7c0JBQ0osQUFDTSxBQUNKOzZCQUZGLEFBRWEsZUFBZSxBQUMxQjsyQkFIRixBQUdXLGVBQWUsQUFDeEI7NEJBSkYsQUFJWSxlQUFlLEFBQ3pCOzZCQUFZLEFBQ1Y7QUFDRTs4QkFBVSxDQURaLEFBQ1ksQUFBQyxBQUNYOzBCQUZGLEFBRVEsQUFDTjsyQkFIRixBQUdTLEFBQ1A7OzRCQUNFLEFBQ1EsQUFDTjs2QkFIUSxBQUNWLEFBRVM7QUFGVCxBQUNFLHFCQUZROzRCQUtWLEFBQ1EsQUFDTjs2QkFYTixBQUljLEFBS1YsQUFFUyxBQUdYO0FBTEUsQUFDRTsyQkFWTixBQWNTLEFBQ1A7Z0NBZkYsQUFlYyxBQUNaOzs2QkFBVSxBQUNELEFBQ1A7MkJBRlEsQUFFSCxBQUNMOzRCQUhRLEFBR0YsQUFDTjs2QkFKUSxBQUlELEFBQ1A7Z0NBdEJJLEFBQ1IsQUFnQlksQUFLRTtBQUxGLEFBQ1I7bUJBbEJJOzhCQTBCSSxDQURaLEFBQ1ksQUFBQyxBQUNYOzBCQUZGLEFBRVEsQUFDTjsyQkFIRixBQUdTLEFBQ1A7OzRCQUNFLEFBQ1EsQUFDTjs2QkFIUSxBQUNWLEFBRVM7QUFGVCxBQUNFLHFCQUZROzRCQUtWLEFBQ1EsQUFDTjs2QkFQUSxBQUtWLEFBRVM7QUFGVCxBQUNFOzRCQUdGLEFBQ1EsQUFDTjs2QkFmTixBQUljLEFBU1YsQUFFUyxBQUdYO0FBTEUsQUFDRTsyQkFkTixBQWtCUyxBQUNQO2dDQW5CRixBQW1CYyxBQUNaOzs2QkFBVSxBQUNELEFBQ1A7MkJBRlEsQUFFSCxBQUNMOzRCQUhRLEFBR0YsQUFDTjs2QkFKUSxBQUlELEFBQ1A7Z0NBeERPLEFBQ2YsQSxBQUtZLEFBeUJSLEFBb0JZLEFBS0U7QUFMRixBQUNSO0FBckJKLEFBQ0U7QUEvQk4sQUFDRSxpQkFGYTtpREE4RFYsRUFBRSxPQUFGLEFBQVMsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVFYyxnQkFBTSxBOztBLEFBQW5CLEssQUFDWjtTQUNFLG9CQURVLEFBQ0EsQTtBQURBLEFBQ2pCO0FBRmlCLEEsS0FLWixBO1NBQWUsQUFDYixBO0FBRGEsQUFDcEI7a0JBTmlCLEEiLCJmaWxlIjoiYm94eS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYXNyZWljaG1hbm4vcHJpdmF0ZS9nZW5zdGVyLWNsaWVudC1zZWN0aW9uIn0=