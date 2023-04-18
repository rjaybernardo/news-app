// Bootstrap CSS imported
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// Google fonts
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";

import "@/styles/globals.css";
import styles from "@/styles/App.module.css";

// Applies the google font to this homepage
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // loads the google font
    <div className={inter.className}>
      {/* meta data */}
      <Head>
        <title>NextJs News App</title>
        <meta
          name="description"
          // key is added
          key="description"
          content="New App NextJs with Typescript "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* public/ favicon folder */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.pageContainer}>
        {/* this Components represents the single page */}
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
