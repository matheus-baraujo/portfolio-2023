import React from 'react'
import { Col } from 'react-bootstrap'
import styles from "./styles.module.css";

import About from './About';
import Skills from './Skills';

const Info = () => {
  return (
    <Col sm={12} md={6}>
      <div className={styles.info}>
        
        <About></About>
        <Skills></Skills>
      </div>
    </Col>
  )
}

export default Info