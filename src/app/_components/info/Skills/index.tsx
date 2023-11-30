import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const skillList = Data.Skills.split(', ');

const Skills = () => {
  return (
    <div className={styles.skills + ' ' + "mb-5"}>

        <h5 className={'mb-3'}>Skills</h5>

        <ul>
            {skillList.map((item, index)=> {
                    return <li key={index}> {item} </li>
                }) 
            }
        </ul>
        
    </div>
  )
}

export default Skills