'use client'

import React from 'react'
import styles from "./styles.module.css";

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModeSwitch = () => {

  

  const toggleMode = () => {

    const icon:any = document.getElementsByClassName(styles.icon);
    
    const container:any = document.querySelector(':root');
    const dataTheme = (container as HTMLElement).getAttribute('data-theme')

    if(dataTheme === 'dark') {
      container.setAttribute('data-theme', 'light');
      icon[0].classList.add(styles.active);
      icon[1].classList.remove(styles.active);

    } else {
      container.setAttribute('data-theme', 'dark');
      icon[0].classList.remove(styles.active);
      icon[1].classList.add(styles.active);

    }
  }

 
  return (
    <>
      <button className={styles.switch} id='toggleDarkMode' onClick={toggleMode}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        </div>
        <div className={styles.icon+' '+styles.active}>
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </div>
      </button>
    </>
  )
}

export default ModeSwitch