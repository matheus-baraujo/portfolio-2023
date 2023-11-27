import React from 'react'
import { Col } from 'react-bootstrap'
import styles from "./styles.module.css";
import * as Data from "../../data.json";

const Info = () => {
  return (
    <Col>
      <div className={styles.info}>{Data.random}</div>
    </Col>
  )
}

export default Info