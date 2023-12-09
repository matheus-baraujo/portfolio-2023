import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const About = () => {
  return (
    <div className={styles.about} id='about'>
        <h5></h5>
        <p>{Data.about}</p>
    </div>
    )
}

export default About