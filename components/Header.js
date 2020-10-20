import React, { useState } from "react";
import cx from "classnames";
import styles from "../styles/Header.module.css";

export default function Header() {

  const [ menuOpen, setMenuOpen ] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen) 
  };

  const menuClassname = cx(styles.menu__toggle, {
    [styles.is_active]: menuOpen,
  });

  const dropdownMenuClassname = cx(styles.nav__dropdown,{
    [styles.nav__open] : menuOpen
  })

  return (
    <header className={styles.header} role="banner" id="">
      <a
        id="logo"
        href=""
        aria-label="Logo, go to homepage"
        className={styles.header_logo}
      >
        <span className={styles.header_logo__colored}>ngozi.io</span>
      </a>
      <button
        type="button"
        aria-label={menuOpen ? "close menu" : 'open menu'}
        aria-controls="menu"
        aria-expanded={menuOpen}
        className={menuClassname}
        onClick={toggleMenu}
      >
        <span className={styles.menu__line}></span>
        <span className={styles.menu__line}></span>
        <span className={styles.menu__line}></span>
      </button>
      <nav id="menu" aria-label="" className={dropdownMenuClassname}>
        <ul>
          <li className={styles.menu__item}><a href="">Work</a></li>
          <li className={styles.menu__item}><a href="">Articles</a></li>
          <li className={styles.menu__item}><a href="">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}
