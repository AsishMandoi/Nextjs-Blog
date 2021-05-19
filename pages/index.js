import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Asish. I'm a sophomore studying Electrical Engineering @IITK. You can contact me on <a href="https://www.facebook.com/asish.mandoi/">Facebook</a> or on <a href="https://www.linkedin.com/in/asish-mandoi-4178581b4/">LinkedIn</a>.</p>
        <p>Check out my <a href="https://github.com/AsishMandoi">GitHub profile</a>.</p>
        <p>Check out <a href="https://asishmandoi.github.io/Tic-Tac-Toe-app/">this app</a> I built recently.</p>
      </section>
    </Layout>
  )
}