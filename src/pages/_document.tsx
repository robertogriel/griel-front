import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { JSX } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styledComponentsSheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </>
        )
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }
}
