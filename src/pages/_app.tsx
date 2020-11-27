import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../components/Layout/Layout";
import theme from "../styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
