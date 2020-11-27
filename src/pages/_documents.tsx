import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheets as MaterialServerStyleSheets } from "@material-ui/core";

export default class CustomDocument extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const materialUiSheets = new MaterialServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          materialUiSheets.collect(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
        </React.Fragment>,
      ],
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="ja-JP">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
