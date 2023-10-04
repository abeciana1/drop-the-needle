import '@/styles/globals.css'
import '@/styles/expand-button.css'
import '@/styles/loading-animation.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import ModalInstance from '@/components/common/ModalInstance'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <ModalInstance />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}