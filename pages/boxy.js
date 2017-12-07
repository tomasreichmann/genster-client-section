import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Section from '../components/Section';
import List from '../components/List';

export default class Boxy extends React.Component {
  static propTypes = {
    boxes: PropTypes.array
  }

  static defaultProps = {
    boxes: []
  }

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()

    const mockData = [
      {
        id: 1,
        requested: 1512602007116, // Date requested
        shipped: 1512602107116, // Date shipped
        returned: 1512602207116, // Date returned
        products: [ // products
          {
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
              comments: 'Meh...'
            }
          }
        ],
      }
    ];
    return { boxes: mockData }
  }

  render() {
    const { boxes = [] } = this.props;
    const listProps = {
      headers: [
        'Číslo objednávky', // Order number
        'Datum objednání', // Date requested
        'Datum odeslání',// Date shipped
        'Datum vrácení',// Date returned
        'Produktů',// Product count
        'Celková cena',// Total price
        'Faktura',// Invoice
      ],
      items: boxes.map( box => {
        return [
          <Link key={'box-detail-' + box.id} href={'/box/' + box.id} ><a>{box.id}</a></Link>, // Order number
          box.requested ? new Date(box.requested).toLocaleString() : '', // Date requested
          box.shipped ? new Date(box.shipped).toLocaleString() : '', // Date shipped
          box.returned ? new Date(box.returned).toLocaleString() : '', // Date returned
          box.products.length, // Product count
          box.products.reduce( (totalPrice, product) => (totalPrice + product.price), 0 ) + ' Kč', // Total price
          <Link key={'box-invoice-' + box.id} href={/faktury/ + box.id} ><a>Faktura</a></Link>, // Invoice
        ];
      })
    }

    return <Layout title="Moje Genster Boxy" >
      <Section >
        <h1>Moje Genster Boxy</h1>
        <List {...listProps} />
      </Section>
    </Layout>;
  }
}
