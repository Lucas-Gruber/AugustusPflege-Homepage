import Head from 'next/head';
import { Directus } from '@directus/sdk';
import 'tailwindcss/tailwind.css'
import Layout from './_layout';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.API_BASEURL + '/graphql?access_token=hhjhjfhjwfjhjfwhjhwhjfehjfwjhjfehjhfwjh',
  cache: new InMemoryCache()
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
