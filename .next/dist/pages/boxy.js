'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
          return [_react2.default.createElement(_link2.default, { key: 'box-detail-' + box.id, href: '/box/' + box.id }, _react2.default.createElement('a', null, box.id)), // Order number
          box.requested ? new Date(box.requested).toLocaleString() : '', // Date requested
          box.shipped ? new Date(box.shipped).toLocaleString() : '', // Date shipped
          box.returned ? new Date(box.returned).toLocaleString() : '', // Date returned
          box.products.length, // Product count
          box.products.reduce(function (totalPrice, product) {
            return totalPrice + product.price;
          }, 0) + ' Kč', // Total price
          _react2.default.createElement(_link2.default, { key: 'box-invoice-' + box.id, href: /faktury/ + box.id }, _react2.default.createElement('a', null, 'Faktura'))];
        } // Invoice
        )
      };

      return _react2.default.createElement(_Layout2.default, { title: 'Moje Genster Boxy' }, _react2.default.createElement(_Section2.default, null, _react2.default.createElement('h1', null, 'Moje Genster Boxy'), _react2.default.createElement(_List2.default, listProps)));
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

Boxy.defaultProps = {
  boxes: []
};
exports.default = Boxy;