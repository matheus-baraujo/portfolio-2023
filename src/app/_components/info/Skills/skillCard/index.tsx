import React from "react";
import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = (prop: any) => {

  return (
    <div className={styles.skillCard} >
      <FontAwesomeIcon icon={prop.iconDefinition} className={styles.skillIcon}/>
    </div>
  );
};

export default SkillCard;
