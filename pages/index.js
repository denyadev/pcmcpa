import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <div>
      <Head>
        <title>pcm.cpa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

        <div className="font-poppins">
            <Layout/>
        </div>
    </div>
  )
}
