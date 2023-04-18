import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Google fonts
import { Inter } from "next/font/google";
import Head from "next/head";

// Applies the google font to this homepage
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // loads the google font
    <div className={inter.className}>
      {/* meta data */}
      <Head>
        <title>NextJs News App</title>
        <meta name="description" content="New App NextJs with Typescript " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* public/ favicon folder */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* this Components represents the single page */}
      <Component {...pageProps} />
    </div>
  );
}
