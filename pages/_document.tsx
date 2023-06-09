import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/music-note-favicon.webp" />
      </Head>
        <body className='w-fit min-w-full'>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
