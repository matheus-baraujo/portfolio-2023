import React from "react";
import styles from "./styles.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a className={styles.link} href="">
            <span></span>About
          </a>
        </li>
        <li>
          <a className={styles.link} href="">
            <span></span>Skills
          </a>
        </li>
        <li>
          <a className={styles.link} href="">
            <span></span>Experiences
          </a>
        </li>
        <li>
          <a className={styles.link} href="">
            <span></span>Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
