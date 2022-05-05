import Head from 'next/head'
import CustomizedTimeline from '../components/CustomizedTimeline'
import GitHubButton from 'react-github-btn'
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
        <div className={styles.btn} >
          <GitHubButton href="https://github.com/fanhuirong/InternetBigNews" data-size="large" data-show-count="true" aria-label="Star fanhuirong/InternetBigNews on GitHub">Star</GitHubButton>
        </div>
        <h3 className={styles.title}>
          国内互联网大事记
        </h3>
        <h4>记录From 2020.10</h4>

        <CustomizedTimeline/>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
