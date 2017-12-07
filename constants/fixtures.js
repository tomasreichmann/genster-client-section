export const boxes = [
  {
    id: '1',
    requested: 1512602007116, // Date requested
    shipped: 1512602107116, // Date shipped
    returned: 1512602207116, // Date returned
    products: [ // products
      {
        id: '1',
        pictures: ['http://l.yimg.com/cd/resizer/2.0/original/QbtSsFr0phAmjDR8mWql9vd80qc'],
        name: 'Spodky',
        brand: 'CK',
        properties: [
          {
            type: 'size',
            value: 'XL'
          },
          {
            type: 'color',
            value: 'white'
          }
        ],
        price: 1000,
        isReturned: false,
        feedback: {
          style: 4,
          fit: 4,
          size: 4,
          price: 2,
          comments: 'Nejlepší spodky ever!'
        }
      },
      {
        id: '2',
        pictures: ['https://static.bezvasport.cz/files/6/f/6f1516_64319193_o.jpg_532x532_f_ffffff.jpg'],
        name: 'Jeans pánské',
        brand: 'Lee Cooper',
        properties: [
          {
            type: 'size',
            value: '38W R'
          },
          {
            type: 'fit',
            value: 'regular'
          },
          {
            type: 'color',
            value: 'black'
          }
        ],
        price: 699,
        isReturned: true,
        feedback: {
          style: 2,
          fit: 2,
          size: 4,
          price: 3,
          comment: 'Meh...'
        }
      }
    ],
  },
  {
    id: '2',
    requested: 1512602007116, // Date requested
    shipped: null, // Date shipped
    returned: null, // Date returned
    products: [],
  }
];

export default {
  boxes
};
