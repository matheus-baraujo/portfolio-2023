'use client'

import React from 'react'
import { Col } from 'react-bootstrap'
import styles from "./styles.module.css";

import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Repositorios from './Repositorios';
import Projects from './Projects';

import ScrollSpy from "react-ui-scrollspy";


const Info = () => {
  return (
    <Col sm={12} md={6}>
      <div className={styles.info}>
        <ScrollSpy offsetBottom={80} scrollThrottle={80} useBoxMethod>
          <About></About>
          <Skills></Skills>
          <Experiences></Experiences>
          <Projects></Projects>
          <Repositorios></Repositorios>
        </ScrollSpy>
      </div>
    </Col>
  )
}

export default Info