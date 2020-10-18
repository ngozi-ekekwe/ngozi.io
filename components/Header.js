import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <nav className={styles.nav}>
          <a href="/" className={styles.header_logo}>
            <span className={styles.header_logo__colored}>Ngozi.io</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
