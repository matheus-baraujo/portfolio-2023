import React from "react";
import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = (prop: any) => {

  return (
    <div className={styles.skillCard} >
      <div className={styles.cardSide+' '+styles.front}>
        <FontAwesomeIcon icon={prop.iconDefinition} className={styles.skillIcon}/>
      </div>
      <div className={styles.cardSide+' '+styles.back}>
        <FontAwesomeIcon icon={prop.iconDefinition} className={styles.skillIconDark}/>
      </div>
    </div>
  );
};

export default SkillCard;
