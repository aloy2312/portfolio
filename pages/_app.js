import { useEffect } from "react";
import "../styles/globals.css";

import Script from "next/script";
import Head from "next/head";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 0,
      once: true,
    });
  });
  return (
    <>
      <Head>
        <title>Aloysius Tan</title>
        <meta name="description" content="Hi! This is my portfolio website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="keywords" content="Aloysius,Tan,Portfolio,Website"></meta>
        <meta name="author" content="Aloysius Tan"></meta>
        <meta
          property="og:image"
          content="https://aloysius.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75"
        />
        <link rel="icon" href="" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
