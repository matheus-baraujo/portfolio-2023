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
            <span></span>Sobre
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#skills"} data-to-scrollspy-id={'skills'}>
            <span></span>Habilidades
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#experiences"} data-to-scrollspy-id={'experiences'}>
            <span></span>Experiência
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#projects"} data-to-scrollspy-id={'projects'}>
            <span></span>Projetos
          </Link>
        </li>
      </ul>
      
    </nav>
    
  );
};

export default Nav;

