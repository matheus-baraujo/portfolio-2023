
import React from 'react'
import { Col } from 'react-bootstrap'
import styles from "./styles.module.css";

import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Info = () => {
  return (
    <Col sm={12} md={6}>
      <div className={styles.info}>
        
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </Col>
  )
}

export default Info