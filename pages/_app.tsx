import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Google fonts
import { Inter } from "next/font/google";

// Applies the google font to this homepage
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  // this Components represents the single page
  return (
    // loads the google font
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
