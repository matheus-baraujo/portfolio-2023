import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const exp = Data.Experiences;

const Experiences = () => {
  return (
    <div className={styles.exp} id='experiences'>
        <h5 className={'mb-3'}></h5>

        <div className={styles.caseList}>

          {exp.map((item, index) => {
            return (
              <div className={styles.case} key={index}>
                <div className={styles.period}>
                  <p>{item[0]} <span></span> {item[1]}</p>
                </div>

                <div className={styles.position}>
                  <h5>{item[2]}</h5>
                  <p>{item[3]}</p>
                </div>
              </div>
            )
          })}

          

        </div>

    </div>
  )
}

export default Experiences