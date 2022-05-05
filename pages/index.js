import Head from 'next/head'
import CustomizedTimeline from '../components/CustomizedTimeline'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>国内互联网大事记录</title>
        <meta name="description" content=" Chinese Internet Company Big News" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          国内互联网大事记录 From 2020.10
        </h1>
        <CustomizedTimeline/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
