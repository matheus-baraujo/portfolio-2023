import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'
import SkillCard from './skillCard';

import {
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";


const skillList = Data.Skills.split(', ');


const Skills = () => {

  var teste = faJs;

  return (
    <div className={styles.skills} id='skills'>

        <h5 className={'mb-3'}></h5>
        

        <ul>
            {skillList.map((item, index)=> {

                switch (item) {
                  case "HTML":
                    teste = faHtml5;
                    break;
                  case "Javascript":
                    teste = faJs;
                    break;
                  case "React":
                    teste = faReact;
                    break;
                  case "NextJs":
                    teste = faNodeJs;
                    break;

                  default:
                    teste = faJs;
                    break;
                }

                return <SkillCard  key={index} iconDefinition={teste}></SkillCard>
              }) 
            }
        </ul>
        
    </div>
  )
}

export default Skills