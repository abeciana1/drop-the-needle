import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import '@/styles/expand-button.css'
import LoadingStore from '@/context/loading-context'
import { LoadingInstance } from '@/components/common'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <LoadingStore>
        <LoadingInstance />
        <Component {...pageProps} />
      </LoadingStore>
    </SessionProvider>
  )
}