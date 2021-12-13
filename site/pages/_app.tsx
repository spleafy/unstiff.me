import "../styles/globals.scss";

// Component CSS
import "../components/Navbar/Navbar.scss";
import "../styles/index.scss";

// Layout
import Layout from "../components/Layout";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
