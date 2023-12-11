'use client'

import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Nav = () => {

  return (
    
    <nav className={styles.nav}>
      
      <ul>
        <li>
          <Link className={styles.link}  href={"#about"} data-to-scrollspy-id={'about'}>
            <span></span>About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#skills"} data-to-scrollspy-id={'skills'}>
            <span></span>Skills
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#"} data-to-scrollspy-id={''}>
            <span></span>Experiences
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#projects"} data-to-scrollspy-id={'projects'}>
            <span></span>Projects
          </Link>
        </li>
      </ul>
      
    </nav>
    
  );
};

export default Nav;

