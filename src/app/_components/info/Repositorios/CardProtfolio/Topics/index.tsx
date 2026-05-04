import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const Topics = (prop: any) => {
  return (
    <span className={styles.tag}>
      <FontAwesomeIcon icon={faHashtag} />{" " + prop.tag}
    </span>
  );
};

export default Topics;
