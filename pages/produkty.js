import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Section from '../components/Section';
import List from '../components/List';
import { boxes } from '../constants/fixtures';
import theme from '../constants/theme';

export default class Products extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    loaded: PropTypes.bool,
  }

  static defaultProps = {
    products: [],
    laoded: false,
  }

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()

    const products = boxes.reduce( (allProducts, box) => {
      return [...allProducts, ...box.products.map( product => ({
        ...product,
        boxId: box.id,
      }) )];
    }, []);

    return {
      products,
      loaded: true,
    };
  }

  render() {
    const { products, loaded } = this.props;

    let content = <p>Načítá se&hellip;</p>;

    if (loaded && products.length) {

      const listProps = {
        headers: [
          'Obrázek', // Picture
          'Název', // Name
          'Značka', // Brand
          'Velikost', // Size
          'Cena', // Price
          'Box', // Price
          'Vráceno', // Return
          'Styl', // Style
          'Střih', // Fit
          'Velikost', // Size
          'Cena', // Price
          'Komentář', // Comment
        ],
        items: products.map( product => {
          return [
            product.pictures.length ? <img key={product.id} src={product.pictures[0]} className="product-picture" height={theme.spacing.verticalBig*2}/> : null,
            product.name,
            product.brand,
            (product.properties.find( property => property.type === 'size' ) || {}).value,
            product.price,
            <Link key={'box-' + product.id} href={{ pathname: '/box', query: { id: product.boxId}}} as={'/box/' + product.boxId} ><a>{product.boxId}</a></Link>,
            <input disabled key={product.id + '-returned'} type="checkbox" value={product.isReturned} />,
            product.feedback.style,
            product.feedback.fit,
            product.feedback.size,
            product.feedback.price,
            product.feedback.comment
          ];
        })
      };

      content = <div>
        <h1>Produkty</h1>
        <List {...listProps} className="product-list" />
      </div>;
    }

    return <Layout title="Produkty" >
      <Section >
        {content}
      </Section>
    </Layout>;
  }
}
