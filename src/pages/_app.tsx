import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <Head>
        <title>CRM HERE</title>
        <meta name="description" content="CRM HERE"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}
