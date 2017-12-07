import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Section from '../components/Section';
import List from '../components/List';
import { boxes } from '../constants/fixtures';

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

    return { boxes };
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
          <Link key={'box-detail-' + box.id} href={{ pathname: '/box', query: { id: box.id}}} as={'/box/' + box.id} ><a>{box.id}</a></Link>, // Order number
          box.requested ? new Date(box.requested).toLocaleString() : '', // Date requested
          box.shipped ? new Date(box.shipped).toLocaleString() : '', // Date shipped
          box.returned ? new Date(box.returned).toLocaleString() : '', // Date returned
          box.products.length, // Product count
          box.products.reduce( (totalPrice, product) => (totalPrice + product.price), 0 ) + ' Kč', // Total price
          box.returned ? <Link key={'box-invoice-' + box.id} href={/faktury/ + box.id} ><a>Faktura</a></Link> : null, // Invoice
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
