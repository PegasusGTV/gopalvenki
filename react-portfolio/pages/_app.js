import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gopalakrishnan Thirunellai Venkitachalam - Research Portfolio</title>
        <meta name="description" content="Graduate Researcher in AI & Robotics Research at Carnegie Mellon University" />
        <meta name="keywords" content="AI, Machine Learning, Robotics, Motion Planning, Multi-Agent Systems, Reinforcement Learning" />
        <meta name="author" content="Gopalakrishnan Thirunellai Venkitachalam" />
        <meta property="og:title" content="Gopalakrishnan Thirunellai Venkitachalam - Research Portfolio" />
        <meta property="og:description" content="Graduate Researcher in AI & Robotics Research at Carnegie Mellon University" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gopalakrishnan Thirunellai Venkitachalam - Research Portfolio" />
        <meta name="twitter:description" content="Graduate Researcher in AI & Robotics Research at Carnegie Mellon University" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
