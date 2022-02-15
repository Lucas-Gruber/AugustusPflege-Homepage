import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />

          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name ="title" content ="Augustus Pflege"/>
          <meta name ="description" content ="Augustus Pflege ist ein Ambulanter Pflegedienst in Augsburg"/>
          <meta name ="copyright" content ="Augustus Pflege / Lucas Gruber"/>
          <meta name ="keywords" content ="augustuspflege,augustus,pflege,pflegedienst,amublant"/>
          <meta property ="og:type" content ="website"/>
          <meta property ="og:url" content ="https://augustuspflege.de"/>
          <meta property ="og:title" content ="Augustus Pflege"/>
          <meta property ="og:description" content ="Augustus Pflege ist ein Ambulanter Pflegedienst in Augsburg"/>
          <meta property ="og:image" content ="https://metaseo.itsvg.in/404.svg"/>
          <meta property ="twitter:card" content ="summary_large_image"/>
          <meta property ="twitter:url" content ="https://augustuspflege.de"/>
          <meta property ="twitter:title" content ="Augustus Pflege"/>
          <meta property ="twitter:description" content ="Augustus Pflege ist ein Ambulanter Pflegedienst in Augsburg"/>
          <meta property ="twitter:image" content ="https://metaseo.itsvg.in/404.svg"/>

        </Head>
        <body className="text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
