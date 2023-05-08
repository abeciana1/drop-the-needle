import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// token
// {
//   name: 'Alex Beciana',
//   email: 'alexander.beciana@gmail.com',
//   picture: 'https://lh3.googleusercontent.com/a/AGNmyxZLR5M3zkX59pf7YzgWV7lmrgKjEOE-NRvwbRoz=s96-c',
//   sub: '101245604077557018825',
//   iat: 1683502428,
//   exp: 1686094428,
//   jti: 'b2bc69a5-f52f-4865-805d-4dc41e6ad67d'
// }

// session
// user: {
//   name: 'Alex Beciana',
//   email: 'alexander.beciana@gmail.com',
//   image: 'https://lh3.googleusercontent.com/a/AGNmyxZLR5M3zkX59pf7YzgWV7lmrgKjEOE-NRvwbRoz=s96-c'
// },
// expires: '2023-06-07T00:45:43.741Z'
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
