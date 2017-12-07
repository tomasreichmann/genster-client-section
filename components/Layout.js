import Link from 'next/link'
import Head from 'next/head'
import PropTypes from 'prop-types'
import theme from '../constants/theme'

const Layout = ({ children, title = 'Genster - klientská sekce' }) => (
  <div>
    <style jsx>{`
      .logo {
        height: ${theme.font.size.text};
      }
      nav {
        margin: 0 ${theme.spacing.horizontal * -1}px;
      }
      nav a {
        color: ${theme.color.textInverted};
        margin: 0 ${theme.spacing.horizontal}px;
        text-decoration: none;
        font-weight: ${theme.font.weight.navigation};
        display: inline-block;
      }
      footer {
        font-size: ${theme.font.size.textSmall};
        font-weight: ${theme.font.weight.light};
        text-align: center;
      }
    `}</style>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.svg' />
    </Head>
    <header>
      <nav>
        <Link href='/' prefetch><a><img src="/static/genster-logo.svg" className="logo" /></a></Link>
        <Link href='/boxy'><a>Boxy</a></Link>
        <Link href='/produkty'><a>Produkty</a></Link>
        <Link href='/chci-genster-box' prefetch><a>Chci Genster Box</a></Link>
        <Link href='/profil' prefetch><a>Profil</a></Link>
        <Link href='/odhlasit'><a>Odhlásit</a></Link>
      </nav>
    </header>

    {children}

    <footer>Genster 2017</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};

export default Layout;