import "../styles/globals.css";

// Component CSS
import "../components/Post/Post.scss";
import "../components/Navbar/Navbar.scss";
import "../styles/index.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
