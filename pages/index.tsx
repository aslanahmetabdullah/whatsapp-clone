import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import SideBar from "./component/SideBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WhatsApp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar></SideBar>
    </div>
  )
}

export default Home
