import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
