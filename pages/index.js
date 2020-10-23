import { Fragment } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>
          Front-end Developer | Ngozi Ekekwe | JavaScript, React, NextJS
        </title>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <a href="#" id="skip-link" role="button">
        Skip to Navigation
      </a>
      <Header />
      <main>
        <Profile />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
