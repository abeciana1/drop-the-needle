import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, getSession } from "next-auth/react"
// import { GetServerSideProps } from 'next'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // console.log('session', session)
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}