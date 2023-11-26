import * as React from "react";
import styles from "./styles.module.css";
import { Col, Stack } from "react-bootstrap";

import * as Data from "../../data.json";

interface User {
  name: string;
  job: string;
  github: string;
}

let data: User = Data;


function Intro() {
  return (
    <Col>
      <div className={styles.intro}>

        <div className={styles.titles}>
          <Stack direction="vertical" gap={3}>
            <h1 className="mb-3">{data.name}</h1>
            <h2 className="mb-3">{data.job}</h2>
            <p className="mb-3">I build exceptional and accessible digital experiences for the web.</p>
          </Stack>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <a className={styles.link} href="">
                <span></span>About
              </a>
            </li>
            <li>
              <a className={styles.link} href="">
                <span></span>Experiences
              </a>
            </li>
            <li>
              <a className={styles.link} href="">
                <span></span>Projects
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </Col>
  );
}

export default Intro;
