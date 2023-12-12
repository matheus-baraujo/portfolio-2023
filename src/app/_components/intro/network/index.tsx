import React from 'react'

import { Stack } from 'react-bootstrap';
import styles from "./styles.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Network = () => {
  return (
    <div className={styles.network}>
        
        <Stack className={styles.wrapper} direction={'horizontal'} gap={3}>
          <a className={'me-0 ' + styles.link} href="https://github.com/matheus-baraujo"><FontAwesomeIcon  icon={faGithub}/></a>
          <a className={'mx-auto ' + styles.link} href="https://linkedin.com/in/matheus-batista-de-araújo-0402621b3"><FontAwesomeIcon  icon={faLinkedin}/></a>
          <a className={'ms-0 ' + styles.link} href="#"><FontAwesomeIcon  icon={faInstagram}/></a>
        </Stack>
        
    </div>
  )
}

export default Network