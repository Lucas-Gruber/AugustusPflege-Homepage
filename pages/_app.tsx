import Head from 'next/head';
import { Directus } from '@directus/sdk';
import 'tailwindcss/tailwind.css'
import Layout from './_layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Component {...pageProps} />
    </Layout>
  )
}
