import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const About = () => {
  return (
    <div className={styles.about +' '+ 'mb-5'}>
        <h5>About</h5>
        <p>{Data.random}</p>
    </div>
    )
}

export default About