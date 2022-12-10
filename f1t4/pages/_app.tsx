import 'antd/dist/reset.css'
import '../styles/slick.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'
import Head from 'next/head'
import { ConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9381FF',
        },
      }}
    >
      <DefaultLayout>
        <Head>
          <title>내일의 집</title>
          <meta name='description' content='내일의 집' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </DefaultLayout>
    </ConfigProvider>
  )
}
