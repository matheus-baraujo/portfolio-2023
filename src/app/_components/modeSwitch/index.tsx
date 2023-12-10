'use client'

import React from 'react'
import styles from "./styles.module.css";
import { Switch } from '@mui/material';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const ModeSwitch = () => {

  const toggleMode = () => {
    const container:any = document.querySelector(':root');
    const buttonDarkMode:any = document.getElementById('toggleDarkMode');

    const dataTheme = (container as HTMLElement).getAttribute('data-theme')

    if(dataTheme === 'dark') {
      container.setAttribute('data-theme', 'light');
      buttonDarkMode.innerHTML = 'Dark Mode';
    } else {
      container.setAttribute('data-theme', 'dark');
      buttonDarkMode.innerHTML = 'Light Mode';
    }
  }

 
  return (
    <>
      {/* <Switch checkedIcon={faMoon.icon}></Switch> */}

      <button className={styles.switch} id='toggleDarkMode' onClick={toggleMode}>
        Light Mode 
      </button>
    </>
  )
}

export default ModeSwitch