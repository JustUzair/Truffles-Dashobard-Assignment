import React from "react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <title>Truffle</title>
        <meta name="truffle" content="Truffle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
