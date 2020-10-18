import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <a href="#" id="skip-link" role="button">Skip to Navigation</a>
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
          main
        </main>
        <Footer />
      </div>
    </div>
  );
}
