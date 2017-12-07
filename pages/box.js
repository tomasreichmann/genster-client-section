import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Section from '../components/Section';
import List from '../components/List';
import { boxes } from '../constants/fixtures';
import theme from '../constants/theme';

export default class Boxy extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    box: PropTypes.object,
    loaded: PropTypes.bool,
  }

  static defaultProps = {
    box: null,
    laoded: false,
  }

  static async getInitialProps (params) {
    // eslint-disable-next-line no-undef
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()

    return {
      id: params.query.id,
      box: boxes.find( box => box.id === params.query.id),
      loaded: true,
    };
  }

  render() {
    const { box, loaded, id } = this.props;

    let content = <p>Načítá se&hellip;</p>;

    if (loaded && box) {
      let status = 'Zde můžete vyplnit žádost o Genster box'; // Here you can fill in a Genster Box request
      const boxDetails = [];
      if (box.requested) {
        status = 'Váš box se připravuje'; // your box is being prepared
        boxDetails.push(<p key="date-requested" >Datum objednání: {new Date(box.requested).toLocaleDateString()}</p>);
      }
      if (box.shipped) {
        status = 'Váš box je na cestě, nebo čeká na vrácení.'; // your box is on the way or waiting for return
        boxDetails.push(<p key="date-shipped" >Datum odeslání: {new Date(box.shipped).toLocaleDateString()}</p>);
      }
      if (box.delivered) {
        // your box is delivered. When you are done with trying it on, please let us know, when can we pick it up.
        status = 'Váš box je doručen. Až budete mít všechno vyzkoušené, dejte nám prosím vědět, kdy si můžeme box vyzvednout.';
        boxDetails.push(<p key="date-delivered" >Datum doručení: {new Date(box.delivered).toLocaleDateString()}</p>);
      }
      if (box.returned) {
        status = 'Váš box je zpět. Děkujeme.'; // Your box is back. Thank you.
        boxDetails.push(<p key="date-returned" >Datum vrácení: {new Date(box.returned).toLocaleDateString()}</p>);
      }

      const listProps = {
        headers: [
          'Obrázek', // Picture
          'Název', // Name
          'Značka', // Brand
          'Velikost', // Size
          'Cena', // Price
          'Vrátit', // Return
          'Styl', // Style
          'Střih', // Fit
          'Velikost', // Size
          'Cena', // Price
          'Komentář', // Comment
        ],
        items: box.products.map( product => {
          return [
            product.pictures.length ? <img key={product.id} src={product.pictures[0]} className="product-picture" height={theme.spacing.verticalBig*2}/> : null,
            product.name,
            product.brand,
            (product.properties.find( property => property.type === 'size' ) || {}).value,
            product.price,
            <input key={product.id + '-returned'} type="checkbox" value={product.isReturned} />,
            product.feedback.style,
            product.feedback.fit,
            product.feedback.size,
            product.feedback.price,
            product.feedback.comment
          ];
        })
      };

      content = <div>

        <h1>Box {id}</h1>
        <p>{status}</p>
        {boxDetails}
        <p><Link key={'box-invoice-' + box.id} href={/faktury/ + box.id} ><a>Faktura</a></Link></p>
        <h2>Produkty</h2>
        <List {...listProps} className="product-list" />
      </div>;
    }

    return <Layout title="Moje Genster Boxy" >
      <Section >
        {content}
      </Section>
    </Layout>;
  }
}
