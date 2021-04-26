import Head from "next/head";

const Meta = (props) => (
  <Head>
    <title>{`${props.title} | Guy Torbet`}</title>
    <meta key="description" name="description" content={props.description} />
    <meta property="og:title" content={`${props.title} | Guy Torbet`} />
    <meta property="og:description" content={props.description} />
    <meta key="charset" charSet="utf-8" />
    <meta key="mobileWebAppCapable" name="mobile-web-app-capable" content="yes" />

    <meta key="appleMobileWebAppTitle" name="apple-mobile-web-app-title" content={props.title} />
    <meta key="appleMobileWebAppCapable" name="apple-mobile-web-app-capable" content="yes" />
    <meta key="appleMobileWebAppStatusBarStyle" name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta key="xUACompatible" httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta
      key="keywords"
      name="keywords"
      content="Guy Torbet Developer React Lighthouse Crypto Cryptocurrency Guides Productivity Help Lessons"
    />

    <meta key="ogImage" property="og:image" content="/profile.jpg" />
    <meta key="ogUrl" property="og:url" content="https://torbet.co" />
    <meta key="twitterImage" property="twitter:image" content="/profile.jpg" />
    <meta key="twitterCard" name="twitter:card" content="summary" />
    <meta key="twitterSite" name="twitter:site" content="@guytorbet" />
    <meta name="twitter:title" content={`${props.title} | Guy Torbet`} />
    <meta name="twitter:description" content={props.description} />

    <script type="application/ld+json">{`
                    {
                    "@context":"https://schema.org/",
                    "@type":"Organization",
                    "name":"Guy Torbet",
                    "image":"https://torbet.co/favicon.ico",
                    "logo":"https://torbet.co/favicon.ico",
                    "url": "https://torbet.co"
                    }
                    `}
    </script>

  </Head>
);

export default Meta;