import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import type { Config, Context } from "@netlify/edge-functions";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app<3!" />
        <p className="description">
	You are in {context.geo.country?.name}
	</p>
      </main>

      <Footer />
    </div>
  )
}
