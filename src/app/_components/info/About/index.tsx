import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const About = () => {
  return (
    <div className={styles.about} id='about'>

        {Data.About.split('. ').map((paragraph):any => {
          return <p>{paragraph+'.'}</p>
        })}
    </div>
    )
}

export default About