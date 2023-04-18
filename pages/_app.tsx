import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // this Components represents the single page
  return <Component {...pageProps} />;
}
