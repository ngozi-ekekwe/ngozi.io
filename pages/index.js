import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <Head>
          <title>
            Front-end Developer | Ngozi Ekekwe | JavaScript, React, NextJS
          </title>
          <link rel="icon" href="/fav.ico" />
        </Head>

        <Header />
        <main className={styles.main}>
          <Profile />
        </main>
        <Footer />
      </div>
    </div>
  );
}
