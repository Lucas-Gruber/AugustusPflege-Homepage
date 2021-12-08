import Head from 'next/head';
import Mitglied from '../components/member';
import Hero from '../components/Hero';
import Content from '../components/indexContent';

export default function Home() {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Content />

      
      </div>
  ); 
}
