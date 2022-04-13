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
        <link rel="icon" href="" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
