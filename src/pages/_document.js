import Document, { Html, Head, Main, NextScript } from 'next/document'
class WebDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-039X2BHSL6"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-039X2BHSL6', { page_path: window.location.pathname });
              `
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M34P4VF');
            `
            }}
          />

          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="author"
            content="Tiago Salgado (tiago.salgado@devsoftbr.com)"
          />
          <meta property="og:locale" content="pt-br" />
          <meta property="og:site_name" content="Tap Promotora" />
          <meta property="og:title" content="Tap Promotora" />
          <meta property="og:description" content="" />
          <meta httpEquiv="Content-Language" content="pt-br" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M34P4VF"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default WebDocument
