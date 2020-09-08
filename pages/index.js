import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Img from '../images/Guitar_Player.jpg?trace'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={Img.trace} /> 
        <img src={Img.src} /> 
      </main>
    </div>
  )
}
