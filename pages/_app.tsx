import '@/styles/globals.css'
import '@/styles/expand-button.css'
import '@/styles/loading-animation.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
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