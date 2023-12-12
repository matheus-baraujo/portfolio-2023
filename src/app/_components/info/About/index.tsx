import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const About = () => {
  return (
    <div className={styles.about} id='about'>

        <h5 className='mb-3'></h5>

        {Data.About.split('. ').map((paragraph):any => {
          return <p>{paragraph+'.'}</p>
        })}
    </div>
    )
}

export default About