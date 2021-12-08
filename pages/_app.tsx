import { Directus } from '@directus/sdk';
import 'tailwindcss/tailwind.css'
import Layout from './_layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
