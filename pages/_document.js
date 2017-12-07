import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import theme from '../constants/theme';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="cs">
        <Head>
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

            @media all and (min-width: ${theme.responsive.desktop}) {
              .page {
                width: ${theme.responsive.desktop};
                margin: 0 auto;
              }
            }
          `}</style>
        </Head>
        <body>
          <div className="page" >
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
