import '@/styles/globals.css'
import '@/styles/expand-button.css'
import '@/styles/loading-animation.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import ModalInstanceStore from '@/context/instance-context'
import { LoadingInstance } from '@/components/common'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <ModalInstanceStore>
        <Component {...pageProps} />
      </ModalInstanceStore>
    </SessionProvider>
  )
}