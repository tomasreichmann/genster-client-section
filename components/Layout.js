import Link from 'next/link'
import Head from 'next/head'
import PropTypes from 'prop-types'
import theme from '../constants/theme'

const Layout = ({ children, title = 'Genster - klientská sekce' }) => (
  <div className="page">
    <style global jsx>{`
      @font-face {
        font-family: Genster-Montserrat;
        font-style: normal;
        font-weight: 100;
        src: url(/static/fonts/montserrat-100.eot);
        src: url(/static/fonts/montserrat-100.woff2) format("woff2"),url(/static/fonts/montserrat-100.woff) format("woff"),url(/static/fonts/montserrat-100.ttf) format("truetype")
      }

      @font-face {
        font-family: Genster-Montserrat;
        font-style: normal;
        font-weight: 300;
        src: url(/static/fonts/montserrat-300.eot);
        src: url(/static/fonts/montserrat-300.woff2) format("woff2"),url(/static/fonts/montserrat-300.woff) format("woff"),url(/static/fonts/montserrat-300.ttf) format("truetype")
      }

      @font-face {
        font-family: Genster-Montserrat;
        font-style: normal;
        font-weight: 500;
        src: url(/static/fonts/montserrat-500.eot);
        src: url(/static/fonts/montserrat-500.woff2) format("woff2"),url(/static/fonts/montserrat-500.woff) format("woff"),url(/static/fonts/montserrat-500.ttf) format("truetype")
      }

      body {
        background: ${theme.color.paperInverted};
        font-family: ${theme.font.text};
        font-size: ${theme.font.size.text};
        font-weight: ${theme.font.weight.text};
        color: ${theme.color.textInverted};
        margin: 0;
        padding: 0;
      }

      .title {
        font-family: ${theme.font.text};
        font-size: ${theme.font.size.title};
        font-weight: ${theme.font.weight.title};
        color: ${theme.color.textInverted};
      }

      h1 {
        font-family: ${theme.font.text};
        font-size: ${theme.font.size.heading};
        font-weight: ${theme.font.weight.heading};
        color: ${theme.color.primary};
      }

      .page {
        padding: ${theme.spacing.horizontalBig}px ${theme.spacing.verticalBig}px;
      }

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

      @media all and (min-width: ${theme.responsive.desktop}) {
        .page {
          width: ${theme.responsive.desktop};
          margin: 0 auto;
        }
      }
    `}</style>
    <style jsx>{`

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