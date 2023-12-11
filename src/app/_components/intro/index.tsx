import * as React from "react";
import styles from "./styles.module.css";
import { Col, Stack } from "react-bootstrap";

import * as Data from "../../data.json";
import Network from "./network";
import Nav from "./nav";

interface User {
  name: string;
  job: string;
  github: string;
}

let data: User = Data;


function Intro() {
  return (
    <Col sm={12} md={6}>
      <div className={styles.intro}>

        <div>
          
          <div className={styles.titles}>
            <Stack direction="vertical" gap={3}>
              <h1 className="mb-0">{data.name}</h1>
              <h2 className="mb-0">{data.job}</h2>
              <p className="mb-0">Eu elaboro experiências digitais excepcionais e acessíveis para a web.</p>
            </Stack>
          </div>
          <Nav/>

        </div>

        <Network/>

      </div>
    </Col>
  );
}

export default Intro;
