import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@1&family=Tiro+Kannada&display=swap" rel="stylesheet" />
      <link rel="manifest" href="../public/manifest.json" />
      <link rel="apple-touch-icon" href="../public/icon-512x512.png" />
      {/* Javascript Code */}
      <script src="https://kit.fontawesome.com/4cdcba7205.js" crossOrigin="anonymous"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument