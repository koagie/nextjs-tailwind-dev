import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      {/* headがないと、tailwindcssが動作しない */}
      <Head>
        <meta name="nextjs-rtailwind website" content="MyApp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;